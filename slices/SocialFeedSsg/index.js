import React, { useEffect, useState } from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import axios from 'axios';


const SocialFeedSsg = ({ slice, context }) => {

  const images = context.flickrData;

  const postCount = slice.primary.number_of_posts;


  return (
    <section>
      <div className="bg-white">
        <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
          <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
            <div className="text-2xl font-extrabold tracking-tight text-gray-900">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <PrismicLink field={slice.primary.social_link_url} className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              {slice.primary.social_link_label}<span aria-hidden="true"> &rarr;</span>
            </PrismicLink>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="box-content py-2 relative h-80 overflow-x-auto flex">
                <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8">
                  {/* {slice?.items?.map((item, idx) => ( */}
                  {images?.map(({ server, id, secret, owner, title }, idx) => (
                    <a
                      href={`https://www.flickr.com/photos/${owner}/${id}`}
                      className="relative w-80 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75"
                      key={idx}
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img
                          src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
                          alt={title}
                          className="w-full h-full object-center object-cover" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">{title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialFeedSsg