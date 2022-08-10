import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const Accordion = ({ slice }) => (
  <section>
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <div className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl"><PrismicRichText field={slice.primary.title} /></div>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {slice?.items?.map((item, idx) => (
              <Disclosure key={idx} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900"><PrismicRichText field={item.title} /></span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500"><PrismicRichText field={item.content} /></p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
)

export default Accordion