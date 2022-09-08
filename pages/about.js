import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { createClient } from '../prismicio';
import { components } from '../slices/index';

const __allComponents = { ...components }

const About = (doc, menu, footer) => {
    return(
        <div>
            <h1>About page</h1>
            <Layout altLangs={doc.alternate_languages} menu={menu} footer={footer}>
                {/* Author presentation */}
                <SliceZone slices={doc?.data?.slices} components={__allComponents} />
            </Layout>
        </div>
    )
}

export default About;

export async function getStaticProps({ previewData, locale }) {
    const client = createClient(previewData)

    const document = (await client.getSingle('author', { lang: locale }).catch(e => {
        return null;
    }));

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
            doc: document,
            menu,
            footer,
        }
    }
}