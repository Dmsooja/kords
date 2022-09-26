import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from '../../prismicio';
import { components } from '../../slices/index';
import { Layout } from "../../components/Layout";
import { Header } from "../../components/Blog/AuthorsLayout";
import { ArticlesListCards } from "../../components/Blog/ArticlesListCards";


const __allComponents = { ...components }

export default function Author({ doc, menu, footer, articles }) {
    return (
        <div>
            <Layout altLangs={doc.alternate_languages} menu={menu} footer={footer}>
                {/* Author presentation */}
                <Header data={doc.data} />
                <SliceZone slices={doc.data.slices} components={__allComponents} />
                <ul
                    role="list"
                    id="all-articles"
                    className="overflow-hidden px-4 py-4"
                >
                    {articles?.filter(article => article.data.author.id === doc.id)?.map((article, idx) => {
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
            </Layout>
        </div>
    )
}

export async function getStaticProps({ params, previewData, locale }) {
    const client = createClient(previewData)

    const document = (await client.getByUID('author', params.uid, { lang: locale }).catch(e => {
        return null;
    }));

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
            doc: document,
            articles,
            menu,
            footer,
        }
    }
}

// const endpoint = prismic.getEndpoint('kords')
// const client = prismic.createClient(endpoint)

// const init = async () => {
//   client.get({
//     predicates: [
//       prismic.predicate.at('document.id', doc.id),
//     //   prismic.predicate.has('my.blog_article.article_author_name', `${doc.data.name}`),
//     ],
//   })
// }
// init();

export async function getStaticPaths() {
    const client = createClient()
    const documents = await client.getAllByType('author', { lang: '*' })

    return {
        paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
        fallback: false, // if a page has already been generated but doesn't show => display the cached page
    }
}