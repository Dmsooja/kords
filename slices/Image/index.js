import React from 'react';
import { PrismicRichText, PrismicNextImage } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

const Image = ({ slice }) => (
  <div className='container mx-auto sm:px-6 lg:px-8'>
    <figure className="grid grid-cols-1 gap-4">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} className="ma" />
      <figcaption className="text-center tracking-tight text-darkgreen">
        <PrismicRichText field={slice.primary.caption} />
      </figcaption>
    </figure>
  </div>
)

export default Image