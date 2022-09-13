import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';



const YoutubeVideo = ({ slice }) => (
  <section className='container mx-auto my-6 max-w-7xl px-4 sm:px-6 lg:px-8'>
    <div className="mx-auto max-w-3xl grid justify-items-center">
      <div className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div
        className='w-300-px'
        dangerouslySetInnerHTML={{ __html: slice.primary.youtube_video_link.html }} />
      <div className="text-center tracking-tight text-darkgreen">
        <PrismicRichText field={slice.primary.caption} />
      </div>
    </div>

  </section>
)

export default YoutubeVideo