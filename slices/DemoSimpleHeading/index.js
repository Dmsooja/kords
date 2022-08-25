import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

const DemoSimpleHeading = ({ slice }) => (
  <section>
    <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <div>
        <div className="text-lg leading-6 font-medium text-gray-900"><PrismicRichText field={slice.primary.title} /></div>
        <div className="text-gray-500 text-sm">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
      <button
        type='button'
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <PrismicLink field={slice.primary.button_link}>
          <PrismicRichText field={slice.primary.button_text} />
        </PrismicLink>
      </button>
    </div>
  </section>
)

export default DemoSimpleHeading