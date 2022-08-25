import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const DemoSimpleHeading = ({ slice }) => (
  <section>
    <div className="pb-5 border-b border-gray-200">
      <div className="text-lg leading-6 font-medium text-gray-900"><PrismicRichText field={slice.primary.title} /></div>
      <div className='text-sm text-gray-500'><PrismicRichText field={slice.primary.description} /></div>
    </div>
  </section>
)

export default DemoSimpleHeading