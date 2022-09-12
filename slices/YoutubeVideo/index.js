import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';



const YoutubeVideo = ({ slice }) => (
  <section>
    <div>
      <PrismicRichText field={slice.primary.title} />
      <div dangerouslySetInnerHTML={{ __html: slice.primary.youtube_video_link.html }} />
      <PrismicRichText field={slice.primary.caption} />
    </div>
  </section>
)

export default YoutubeVideo