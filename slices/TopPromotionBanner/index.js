import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import { XIcon } from '@heroicons/react/outline';

const TopPromotionBanner = ({ slice }) => (
  <section>
    <div className="relative bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden"><PrismicRichText field={slice.primary.message} /></span>
            <span className="hidden md:inline"><PrismicRichText field={slice.primary.mobile_message} /></span>
            <span className="block sm:ml-2 sm:inline-block">
              {/* <a href="#" className="text-white font-bold underline">
                {' '}
                Learn more <span aria-hidden="true">&rarr;</span>
              </a> */}
              <PrismicLink field={slice.primary.link} className="text-white font-bold underline">
                <PrismicRichText field={slice.primary.cta} /><span aria-hidden="true">&rarr;</span>
              </PrismicLink>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only"><PrismicRichText field={slice.primary.close_button_label} /></span>
            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default TopPromotionBanner