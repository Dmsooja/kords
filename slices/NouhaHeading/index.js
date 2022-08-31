import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';



const NouhaHeading = ({ slice }) => (
  <div className="my-4 sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div className="pb-5 border-b border-gray-200">
      <div className='text-lg leading-6 font-medium text-gray-900'>
        <PrismicRichText field={slice.primary.title} />
        <div className="mt-2 max-w-4xl text-sm text-gray-500">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </div>
    {slice.variation === "withCta" ?
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <PrismicLink  field={slice.primary.cta_url}>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            { slice.primary.cta_label }
          </button>
        </PrismicLink>
      </div>
      : null
    }
  </div>
)

export default NouhaHeading