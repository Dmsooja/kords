import React from 'react';
import * as prismicH from '@prismicio/helpers';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

const Text = ({ slice }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
    <PrismicRichText field={slice.primary.text} />
    </div>
  </div>
)

export default Text