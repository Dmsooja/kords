import { PrismicLink, PrismicImage, SliceZone, PrismicRichText } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { createClient, linkResolver } from '../prismicio';
import { components } from '../slices/index';
import { blogArticlesGraphQuery } from "../queries";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";


const __allComponents = { ...components }

const ArticleCard = ({ article }) => {
  return (
    <div className="sm:flex sm:items-top">
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 relative w-40 h-40">
          <PrismicLink
            document={article}
            linkResolver={linkResolver}
          >
            {prismicH.isFilled.image(article?.data?.featured_image) && (
              <PrismicNextImage
                field={article.data.featured_image}
                layout="fill"
                className="rounded-md object-center object-cover"
              />
            )}
          </PrismicLink>
        </div>
      </div>
      <div>
        <PrismicLink
          document={article}
          linkResolver={linkResolver}
        >
          <div className="text-lg font-bold">
            <PrismicRichText field={article?.data?.article_title} />
          </div>
        </PrismicLink>
        <div className="mt-1 text-gray-500">
          <PrismicRichText field={article?.data?.article_excerpt} />
        </div>
      </div>
    </div>
  )
}

export default function Blog({ doc, menu, footer, articles }) {
  return (
    <div>
      <Layout altLangs={doc.alternate_languages} menu={menu} footer={footer}>
        <SliceZone slices={doc.data.slices} components={__allComponents} />
        <h2>Our latest articles</h2>
        <ul role="list" id="all-articles" className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
          {articles?.map((article, idx) => {
            return (
              <li key={idx} className="border-b border-gray-200 py-4">
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