import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';


const HeroSectionCard = ({ slice }) => (
  <section>
    <div className="relative mt-10">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={slice.primary.background_image.url}
              alt={slice.primary.background_image.alt}
            />
            <div className="absolute inset-0 bg-indigo-300 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <div className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white"><PrismicRichText field={slice.primary.title} /></span>
            </div>
            <div className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
              <PrismicRichText field={slice.primary.description} />
            </div>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              {(slice.variation == "default") ?
                slice?.items?.map((item, idx) =>
                    <PrismicLink
                      field={item.button_link}
                      key={idx}
                      className={
                        `mt-3 sm:mt-0 shadow sm:mx-3 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md ${item.button_type === "primary" ? "text-indigo-700 bg-white hover:bg-indigo-50" : "text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70"} sm:px-8`}
                    >
                      <span>
                        {item.button_text}
                      </span>
                    </PrismicLink>
                )
                : null
              }
              {(slice.variation == "withAnchor") ?
                slice?.items?.map((item, idx) =>
                    <PrismicLink
                      href={`/#${item.target_anchor}`}
                      key={idx}
                      className={
                        `mt-3 sm:mt-0 shadow sm:mx-3 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md ${item.button_type === "primary" ? "text-indigo-700 bg-white hover:bg-indigo-50" : "text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70"} sm:px-8`}
                    >
                      <span>
                        {item.button_text}
                      </span>
                    </PrismicLink>
                )
                : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSectionCard