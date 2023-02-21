import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import { homeArticlesGraphQuery } from "../queries";
import axios from 'axios';

const __allComponents = { ...components }

export default function Home({ doc, menu, footer, socialFeedData }) {
  return (
    <div>
      <Layout altLangs={doc.alternate_languages} menu={menu} footer={footer}>
        <SliceZone slices={doc.data.slices} components={__allComponents} context={{ flickrData: socialFeedData }} />
      </Layout>
    </div>
  )
}

export async function getStaticProps({ previewData, locale }) {

  const client = createClient(previewData)

  const document = (await client.getSingle('homepage', { lang: locale }).catch(e => {
    return null;
  }));

  if (!document) {
    return {
      notFound: true,
    }
  }

  const articlesData = (await client.getSingle('homepage', { "graphQuery": homeArticlesGraphQuery, lang: locale }).catch(e => {
    return null;
  }));

  let index = 0


  const docWithArticles = {
    ...document,
    data: {
      ...document.data,
      slices: document?.data?.slices?.map(slice => {
        if (slice.slice_type === "featured_articles") {
          index++
          return {
            ...articlesData?.data?.slices[index - 1]
          }
        }
        return {
          ...slice
        }
      })
    }
  }

  const menu = (await client.getSingle("menu_main", { lang: locale }).catch(e => {
    return null
  }));


  const footer = (await client.getSingle("footer", { lang: locale }).catch(e => {
    return null
  }));

  //Query social media feed data

  const socialFeedSlice = await (document?.data?.slices?.filter(slice => slice.slice_type === "social_feed_ssg"));
  const postCount = socialFeedSlice[0]?.primary?.number_of_posts;
  
  
  async function getSocialDataFeed(postCount) {
      if (socialFeedSlice.length >= 1) {
      const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=f929272a6239bdb54c3d66101055135c&group_id=14808571@N24&sort=relevance&per_page=${postCount}&format=json&nojsoncallback=1`)
        .then(res => {
          return res.data.photos.photo;
        })
        .catch(error => {
          console.log(error);
        })
      return response
      
    } else {
      return null;
    }
  }
  
  const socialFeedData = await getSocialDataFeed(postCount);

  return {
    props: {
      doc: docWithArticles,
      menu,
      footer,
      socialFeedData,
    }, // will be passed to the page component as props
  }
}