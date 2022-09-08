import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout";
import { createClient, linkResolver } from '../prismicio';
import { components } from '../slices/index';
import { authorArticlesGraphQuery } from "../queries";
import * as prismicH from "@prismicio/helpers";
import { Content, Header } from "../components/Blog/AuthorsLayout";


const __allComponents = { ...components }

export default function Author({ doc, menu, footer, articles }) {
    return (
        <div>
            <Layout altLangs={doc.alternate_languages} menu={menu} footer={footer}>
                {/* Author presentation */}
                <Header data={doc.data} />
                <SliceZone slices={doc.data.slices} components={__allComponents} />
                <Content data={doc.data} />
            </Layout>
        </div>
    )
}

export async function getStaticProps({ previewData, locale }) {
    const client = createClient(previewData)

    const document = (await client.getSingle('author', { lang: locale }).catch(e => {
        return null;
    }));

    const articlesData = (await client.getSingle('author', { "graphQuery": authorArticlesGraphQuery, lang: locale }).catch(e => {
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

    const articles = await client.getAllByType("author").catch(e => {
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
        }
    }
}