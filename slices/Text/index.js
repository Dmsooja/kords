import React from 'react';
import * as prismicH from '@prismicio/helpers';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

const Text = ({ slice }) => (
  <div>
    <div >
      <PrismicRichText field={slice.primary.text} />
    </div>
  </div>
)

export default Text