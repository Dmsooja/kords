import { PrismicRichText, PrismicLink, SliceZone } from "@prismicio/react";
import { createClient, linkResolver } from '../../prismicio'
import * as prismicH from '@prismicio/helpers';
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { authorGraphQuery } from "../../queries";

const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

const Page = ({ menu, doc, footer }) => {
  return (
    <Layout menu={menu} footer={footer} altLangs={doc?.alternate_languages}>
      <div>
        {/* Heading */}
        <section aria-labelledby="cause-heading">
          <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={doc.data.featured_image.url} alt={doc.data.featured_image.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="mb-2 block text-center text-lg font-semibold text-white">
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
          {/* Author */}
          <div className="md:flex md:items-center md:justify-between md:space-x-5 mb-6 px-6 sm:px-4 md:px-6 lg:px-8 relative bg-white py-2 px-6 sm:py-4 max-w-7xl mx-auto border-b border-neutral-200">
            <div className="flex items-start space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={doc.data.author.data.image.url}
                    alt={doc.data.author.data.image.alt}
                  />
                  <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                </div>
              </div>
              <div className="pt-1.5">
                <div className="text-2xl font-bold text-gray-900">
                  <PrismicLink field={doc.data.author} className="hover:underline">
                    <PrismicRichText field={doc.data.author.data.name} />
                  </PrismicLink>
                </div>
                <div className="text-sm font-medium text-gray-500">
                  <time dateTime={doc.data.article_publishing_date}>
                    {new Date(doc.data.article_update_timestamp).toLocaleDateString(doc.lang, dateOptions)}
                  </time>
                </div>
              </div>
            </div>
            <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
              {doc.data.article_reading_time} min
            </div>
          </div>
        </section>

        {/* <div className="max-w-7xl mx-auto px-10 sm:px-12 lg:px-16"> */}
          <SliceZone slices={doc.data.slices} components={components} />
        {/* </div> */}
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

  // Query the page & author
  const page = await client.getByUID("blog_article", params.uid, {"graphQuery": authorGraphQuery, lang: locale }).catch(e => {
    return null
  });

  // Query the navigation
  const menu = await client.getSingle("menu_main", { lang: locale }).catch(e => {
    return null
  });

  const footer = (await client.getSingle("footer", { lang: locale }).catch(e => {
    return null
  }));

  return {
    props: {
      menu,
      footer,
      doc: page,
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
    fallback: false, // if a page has already been generated but doesn't show => display the cached page
  }
}