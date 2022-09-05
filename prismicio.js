import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'

/**
 * The project's Prismic repository name.
 */
 export const endpoint = sm.apiEndpoint;
 export const repositoryName = prismic.getRepositoryName(endpoint);
 
/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return `/${doc.lang}/`
    case 'blog':
      return `/${doc.lang}/blog`
    case 'blog_article':
      return `/${doc.lang}/blog/${doc.uid}`
    case 'landing_page':
      return `/${doc.lang}/lp/${doc.uid}`
    case 'about':
      return `/${doc.lang}/about`
    case 'contact':
      return `/${doc.lang}/contact`
    case 'products':
      return `/${doc.lang}/products`
    default:
      return null
  }
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, config)

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}