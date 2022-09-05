import { SliceZone } from "@prismicio/react";
import { Layout } from "../../components/Layout";
import { createClient, linkResolver } from '../../prismicio';
import { components } from '../../slices/index';
import * as prismicH from "@prismicio/helpers";


const __allComponents = { ...components }

export default function Page({ doc, menu, articles, footer }) {
  return (
    <div>
      <Layout altLangs={doc.alternate_languages} menu={menu} footer={footer}>
        <SliceZone slices={doc.data.slices} components={__allComponents} />
      </Layout>
    </div>
  )
}

export async function getStaticProps({ params, previewData, locale }) {
  const client = createClient(previewData)

  const page = (await client.getSingle('landing_page', params.uid, { lang: locale }).catch(e => {
    return null
  }));

  const footer = (await client.getSingle("footer", { lang: locale }).catch(e => {
    return null
  }));

  const menu = (await client.getSingle("menu_main", { lang: locale }).catch(e => {
    return null
  }));


  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      doc: page,
      menu,
      footer,
    },
  }
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
  const documents = await client.getAllByType('landing_page', { lang: '*' })

  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: false, // if a page has already been generated but doesn't show => display the cached page
  }
}