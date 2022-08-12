import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';


// With scrolling cards - https://tailwindui.com/components/ecommerce/components/category-previews#component-6ebe66c8103e943e840fd4dbf1cf8ab7
const ScrollingCards = ({ slice }) => (
  <section>
    <div className="bg-white">
      <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <div className="text-2xl font-extrabold tracking-tight text-gray-900"><PrismicRichText field={slice.primary.title} /></div>
          {/* <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"> */}
          <PrismicLink field={slice.primary.section_link} className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            <PrismicRichText field={slice.primary.sectionLinkLabel} /><span aria-hidden="true"> &rarr;</span>
          </PrismicLink>
          {/* </a> */}
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
              <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                {slice?.items?.map((item, idx) => (
                  <PrismicLink
                    key={idx}
                    field={item.card_link}
                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={item.card_image.url} alt={item.card_image.alt} className="w-full h-full object-center object-cover" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white"><PrismicRichText field={item.card_label} /></span>
                  </PrismicLink>


                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <PrismicLink field={slice.primary.section_link} className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            <PrismicRichText field={slice.primary.sectionLinkLabel} /><span aria-hidden="true"> &rarr;</span>
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
)

export default ScrollingCards