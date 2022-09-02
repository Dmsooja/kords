import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient, linkResolver } from '../../prismicio'
import * as prismicH from '@prismicio/helpers';
import { components } from "../../slices";
import { Layout } from "../../components/Layout";

const Page = ({ menu, doc, footer }) => {
  return (
    <Layout menu={menu} footer={footer} altLangs={doc?.alternate_languages}>

      <div>
        {/* Heading */}
        {/* <div className="mt-2 mb-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          <PrismicRichText field={doc.data.article_title} />
        </div>
        <span className="mb-2 block text-center text-lg font-semibold text-indigo-600">
          {doc.data.article_category}
        </span> */}

        {/* Image banner */}
        <section aria-labelledby="cause-heading">
          <div className="mb-6 relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={doc.data.featured_image.url} alt={doc.data.featured_image.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="mb-2 block text-center text-lg font-semibold text-indigo-600">
                {doc.data.article_category}
              </span>
              <div id="cause-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <PrismicRichText field={doc.data.article_title} />
              </div>
              <div className="mt-3 text-xl text-white">
                <PrismicRichText field={doc.data.article_excerpt} />
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SliceZone slices={doc.data.slices} components={components} />
        </div>
      </div>
    </Layout>
  );
};

export default Page;


/*
  Return a document/page content dynamically based on the URL
*/

export async function getStaticProps({ params, previewData, locale }) {
  const client = createClient({ previewData });

  // Query the page
  // const page = await client.getByUID("blog-article", params.uid);
  const page = await client.getByUID("blog_article", params.uid, { lang: locale });

  // Query the navigation
  const menu = await client.getSingle("menu_main", { lang: locale });

  const footer = (await client.getSingle("footer", { lang: locale }).catch(e => {
    return null
  }));



  return {
    props: {
      menu,
      footer,
      doc: page
    },
  };
}

// Paths
/*
  The Link Resolver runs client-side,
  which means that it can only work with the data received from the API.
  Use the Link Resolver when you want to build shorter URLs, like me.com/post/hello-world or me.com/about-me.
*/

// determines all of the routes for statically-generated dynamic pages
export async function getStaticPaths() {
  const client = createClient()
  const documents = await client.getAllByType('blog_article', { lang: '*' })

  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true, // if a page has already been generated but doesn't show => display the cached page
  }
}