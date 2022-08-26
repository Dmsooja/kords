import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const LogoCloud = ({ slice }) => (
  <section className='mb-4'>
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={slice.primary.image.url} alt={slice.primary.image.alt}
        />
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          <PrismicRichText field={slice.primary.title} />
        </div>
        {slice.variation === "headerWithDescription" ?
          <div className="mt-6 text-xl text-indigo-100 max-w-3xl">
            <PrismicRichText field={slice.primary.description} />
          </div>
          : null
        }
      </div>
    </div>
  </section>
)

export default LogoCloud