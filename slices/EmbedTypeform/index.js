import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers'

function htmlSerializer(type, element, text, children) {
  if (type === 'pre')
    return `${<PrismicRichText field={slice.primary.typeform_embed} />}`
  return null
}


const EmbedTypeform = ({ slice }) => (
  <section className='container mx-auto my-6 max-w-7xl px-4 sm:px-6 lg:px-8'>
    <div className="mx-auto max-w-3xl grid justify-items-center">
      {/* <PrismicRichText field={slice.primary.typeform_embed} /> */}
      {/* {prismicH.isFilled.richText(slice.primary.text) && (
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: prismicH.asHTML(slice.primary.text, null, htmlSerializer),
            }}
          />
        </div>
      )} */}
      <iframe height="423" title="Embedded Wufoo Form" allowtransparency="true" frameborder="0" scrolling="no" style="width:100%;border:none" sandbox="allow-popups-to-escape-sandbox allow-top-navigation allow-scripts allow-popups allow-forms allow-same-origin" src="https://dmprismic.wufoo.com/embed/z1i7pvk4115cpwn/"> <a href="https://dmprismic.wufoo.com/forms/z1i7pvk4115cpwn/">Fill out my Wufoo form!</a> </iframe>
    </div>
  </section>
)

export default EmbedTypeform