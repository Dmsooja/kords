import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';



const NouhaHeading = ({ slice }) => (
  <section className='my-4 max-w-7xl mx-auto sm:px-6 lg:px-8" pb-5 border-b border-gray-200'>
    <div className='text-lg leading-6 font-medium text-gray-900'>
      <PrismicRichText field={slice.primary.title} />
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
        Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
        Fringilla egestas justo massa purus sagittis malesuada.
      </p>
    </div>
  </section>
)

export default NouhaHeading