import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers'

const WufooForm = ({ slice }) => {

  const content = `<iframe height="500" title="Embedded Wufoo Form" allowtransparency="true" frameborder="0" scrolling="no" header="hide" style="width:100%;border:none" sandbox="allow-popups-to-escape-sandbox allow-top-navigation allow-scripts allow-popups allow-forms allow-same-origin" src="https://dmprismic.wufoo.com/embed/${slice.primary.form_id}/"> <a href="https://dmprismic.wufoo.com/forms/${slice.primary.form_id}/"></a></iframe>`

  return (
  <section>
    <div className="mx-auto px-12 justify-items-center">
      {prismicH.isFilled.keyText(slice.primary.form_id) && (
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  </section>
)}

export default WufooForm