import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import { homeArticlesGraphQuery } from "../queries";


const __allComponents = { ...components }

export default function Home({ doc, menu, settings, footer }) {
  return (
    <div>
      <Layout altLangs={doc.alternate_languages} menu={menu} footer={footer}>
        <SliceZone slices={doc.data.slices} components={__allComponents} />
      </Layout>
    </div>
  )
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient(previewData)

  const document = (await client.getSingle('homepage', { lang: locale }).catch(e => {
    return null;
  }));

  // const document = (await client.getSingle('homepage', { "graphQuery": homeArticlesGraphQuery, lang: locale }).catch(e => {
  //   return null;
  // }));
  
  if (!document) {
    return {
      notFound: true,
    }
  }
  
  const articlesData = (await client.getSingle('homepage', { "graphQuery": homeArticlesGraphQuery, lang: locale }).catch(e => {
    return null;
  }));  

  let index=0


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
  

  return {
    props: {
      doc: docWithArticles,
      // doc: document,
      menu: menu,
      footer: footer,
    }, // will be passed to the page component as props
  }
}