import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import { blogArticlesGraphQuery } from "../queries";
import { ArticlesListCards } from "../components/Blog/ArticlesListCards";

const __allComponents = { ...components }

export default function Blog({ doc, menu, footer, articles }) {
  return (
    <div>
      <Layout altLangs={doc.alternate_languages} menu={menu} footer={footer}>
        <SliceZone slices={doc.data.slices} components={__allComponents} />
        <div className="my-10">
          <div className="text-center text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            <h2>Our latest articles</h2>
          </div>
          <ul
            role="list"
            id="all-articles"
            className="overflow-hidden px-4 py-4"
          >
            {articles?.map((article, idx) => {
              return (
                <li
                  key={idx}
                  className="shadow max-w-7xl mt-10 mx-auto py-6 bg-white sm:px-6 sm:rounded-md"
                >
                  <ArticlesListCards article={article} />
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient(previewData)

  const document = (await client.getSingle('blog', { lang: locale }).catch(e => {
    return null;
  }));

  const articlesData = (await client.getSingle('blog', { "graphQuery": blogArticlesGraphQuery, lang: locale }).catch(e => {
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

  const articles = await client.getAllByType("blog_article").catch(e => {
    return null
  });

  const footer = (await client.getSingle("footer", { lang: locale }).catch(e => {
    return null
  }));

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
      doc: docWithArticles,
      articles,
      menu,
      footer,
    }, // will be passed to the page component as props
  }
}