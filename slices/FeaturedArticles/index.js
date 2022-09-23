import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { asDate } from '@prismicio/helpers';

const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

const FeaturedArticles = ({ slice }) => (
  <section>
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"><PrismicRichText field={slice?.primary?.title} /></div>
          <div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            <PrismicRichText field={slice?.primary?.description} />
          </div>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {slice?.items?.map((item, idx) => {
            return (
              <div key={idx} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                {slice.variation !== "withContentRelationship" ?
                  <div>
                    <div className="flex-shrink-0">
                      <img className="h-48 w-full object-cover" src={item?.featured_image?.url} alt={item?.featured_image?.alt} />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-indigo-600">
                          <PrismicLink field={item?.category_link} className="hover:underline">
                            <PrismicRichText field={item?.category_name} />
                          </PrismicLink>
                        </div>
                        <PrismicLink document={item} className="block mt-2">
                          <div className="text-xl font-semibold text-gray-900"><PrismicRichText field={item?.article_title} /></div>
                          <div className="mt-3 text-base text-gray-500"><PrismicRichText field={item?.article_excerpt} /></div>
                        </PrismicLink>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <PrismicLink field={item?.article_author_link}>
                            <span className="sr-only"><PrismicRichText field={item?.article_author_name} /></span>
                            <img className="h-10 w-10 object-cover rounded-full" src={item?.article_author_image?.url} alt={item?.article_author_image?.alt} />
                          </PrismicLink>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            <PrismicLink field={item?.article_author_link} className="hover:underline">
                              <PrismicRichText field={item?.article_author_name} />
                            </PrismicLink>
                          </div>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={item?.article_publishing_date}>{new Date(item?.article_update_timestamp).toLocaleDateString("en-US", dateOptions)}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{item?.article_reading_time} min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  :
                  <div>
                    <div className="flex-shrink-0">
                      <img className="h-48 w-full object-cover" src={item?.linked_article?.data?.featured_image?.url} alt={item?.linked_article?.data?.featured_image?.alt} />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-indigo-600">
                          <PrismicLink field={item?.linked_article?.data?.category_link} className="hover:underline">
                            <PrismicRichText field={item?.linked_article?.data?.category_name} />
                          </PrismicLink>
                        </div>
                        <PrismicLink field={item?.linked_article} className="block mt-2">
                          <div className="text-xl font-semibold text-gray-900"><PrismicRichText field={item?.linked_article?.data?.article_title} /></div>
                          <div className="mt-3 text-base text-gray-500"><PrismicRichText field={item?.linked_article?.data?.article_excerpt} /></div>
                        </PrismicLink>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <PrismicLink field={item?.linked_article?.data?.author}>
                            <span className="sr-only"><PrismicRichText field={item?.linked_article?.data?.author.data.name} /></span>
                            <img className="h-10 w-10 object-cover rounded-full" src={item?.linked_article?.data?.author.data.image?.url} alt={item?.linked_article?.data?.author.data.image?.alt} />
                          </PrismicLink>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            <PrismicLink field={item?.linked_article?.data?.author} className="hover:underline">
                              <PrismicRichText field={item?.linked_article?.data?.author.data.name} />
                            </PrismicLink>
                          </div>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={item?.linked_article?.data?.article_publishing_date}>{new Date(item?.linked_article?.data?.article_update_timestamp).toLocaleDateString("en-US", dateOptions)}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{item?.linked_article?.data?.article_reading_time} min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </section>
)

export default FeaturedArticles