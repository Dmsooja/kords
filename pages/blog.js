import { PrismicLink, PrismicImage, SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import { blogArticlesGraphQuery } from "../queries";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";


const __allComponents = { ...components }

const ArticleCard = ({ article }) => {
  return (
    <div className="sm:flex">
      {/* <PrismicLink document={article}> */}
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
        {/* <svg
          className="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
        </svg> */}
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 relative w-40 h-40">

          {prismicH.isFilled.image(article.data.featuredImage) && (
            <PrismicNextImage
              field={article.data.featuredImage}
              layout="fill"
              className="object-cover"
            />
          )}
        </div>

      </div>
      <div>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </div>
      {/* </PrismicLink> */}
    </div>
  )
}

export default function Blog({ doc, menu, articles }) {
  return (
    <div>
      {/* <Layout menu={menu} footer={footer} altLangs={doc.alternate_languages}> */}
      <Layout altLangs={doc.alternate_languages} menu={menu}>
        <SliceZone slices={doc.data.slices} components={__allComponents} />
        <ul role="list" className="space-y-3">
          {articles?.map((article, idx) => {
            return (
              <li key={idx} className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
                <ArticleCard article={article} />
              </li>
            )
          })}
        </ul>
      </Layout>
    </div>
  )
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient(previewData)

  const document = (await client.getSingle('blog', { lang: locale }).catch(e => {
    return null;
  }));

  const articles = await client.getAllByType("blog_article").catch(e => {
    return null
  });

  // const footer = (await client.getSingle("footer", { lang: locale }).catch(e => {
  //   return null
  // }));

  const menu = (await client.getSingle("menu_main", { lang: locale }).catch(e => {
    return null
  }));


  if (!document) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      doc: document,
      articles: articles,
      menu: menu,
      // footer: footer,
    }, // will be passed to the page component as props
  }
}