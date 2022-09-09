import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';


const CtaSection = ({ slice }) => (
  <section>
    <div className="relative bg-gray-800">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <div className="text-lg font-semibold text-gray-300">
            <PrismicRichText field={slice.primary.headline} />
          </div>
          <div className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="mt-3 text-lg text-gray-300">
            <PrismicRichText field={slice.primary.description} />
          </div>
          <div className="mt-8">
            {slice?.items?.map((item, i) => {
              return (
                <div className="inline-flex rounded-md shadow">
                  <PrismicLink
                    field={item.button_url}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.button_label}
                  </PrismicLink>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CtaSection