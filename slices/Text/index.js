import React from 'react';
import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';

const Text = ({ slice }) => (
  <section>
    <div className="leading-relaxed md:text-xl md:leading-relaxed">
      {prismicH.isFilled.richText(slice.primary.text) ?
        <PrismicRichText field={slice.primary.text} />
        : <p>Content is missing</p>
      }
    </div>

  </section>
)

export default Text