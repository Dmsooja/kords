import React from 'react';
import * as prismicH from '@prismicio/helpers';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

const Text = ({ slice }) => (
  <div className="relative overflow-hidden bg-white container mx-auto sm:px-6 lg:px-8">
    <div className='prose prose-lg prose-indigo mx-auto mt-6 text-gray-500'>
      {/* <div className='mt-8 text-xl leading-8 text-gray-500'> */}
      <div className="mt-8 text-xl leading-8 text-gray-500 max-w-7xl">
        <PrismicRichText field={slice.primary.text} />
      </div>
    </div>
  </div>
)

export default Text