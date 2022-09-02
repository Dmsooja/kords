import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

const perks = [


  {
    name: 'Free returns',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description: 'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: 'Same day delivery',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: 'All year discount',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
]

const Reinsurance = ({ slice }) => (
  <section aria-labelledby="perks-heading" className="border-t border-gray-200 bg-gray-50">
    <PrismicRichText field={slice.primary.title} id="perks-heading" className="sr-only" />
    <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
        {slice?.items?.map((item, idx) => {
          return (
            <div
              key={idx}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <img className="-my-1 mx-auto h-24 w-auto" src={item.reinsurance_image.url} alt={item.reinsurance_image.alt} />
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                <PrismicRichText
                  field={item.reinsurance_label}
                  className="text-base font-medium text-gray-900"
                />
                <PrismicRichText
                  field={item.reinsurance_description}
                  className="mt-3 text-sm text-gray-500"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default Reinsurance