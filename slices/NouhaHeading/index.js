import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';



const NouhaHeading = ({ slice }) => (
  <div className="pb-5 border-b border-gray-200 my-4 sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div>
      <div className='text-lg leading-6 font-medium text-gray-900'>
        <PrismicRichText field={slice.primary.title} />
        <div className="mt-2 max-w-4xl text-sm text-gray-500">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </div>
  </div>
)

export default NouhaHeading