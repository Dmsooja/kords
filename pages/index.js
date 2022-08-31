import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { createClient } from '../prismicio';
import { components } from '../slices/index';
import { homeArticlesGraphQuery } from "../queries";


const __allComponents = { ...components }


// export default function Home({ doc, menu, footer }) {
  export default function Home({ doc, menu, settings}) {
  return (
    <div>
      {/* <Layout menu={menu} footer={footer} altLangs={doc.alternate_languages}> */}
      <Layout altLangs={doc.alternate_languages} menu={menu}>
        <SliceZone slices={doc.data.slices} components={__allComponents} />
      </Layout>
    </div>
  )
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient(previewData)

  // const document = (await client.getSingle('homepage', { lang: locale }).catch(e => {
  const document = (await client.getSingle('homepage', { "graphQuery": homeArticlesGraphQuery, lang: locale }).catch(e => {
      return null;
  }));
  

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
      menu: menu,
      // footer: footer,
    }, // will be passed to the page component as props
  }
}