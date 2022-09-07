import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';



const DemoHeadingMichel = ({ slice }) => (
  <section>
    <div className="pb-5 border-b border-gray-200">
      <div className="text-lg leading-6 font-medium text-gray-900">
        <PrismicRichText field={slice.primary.title} />
      </div>
    </div>
  </section>
)

export default DemoHeadingMichel