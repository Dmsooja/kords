import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { linkResolver } from '../../prismicio'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import Link from 'next/link'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Menu = ({ slice }) => (
  <section>
    <>
      <Popover className="relative mx-4">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              )}
            >
              {slice.variation === "dropdownMenu" ?
                <>
                  <span><PrismicRichText field={slice.primary.dropdownLevel1Label} /></span>
                  <ChevronDownIcon
                    className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                    aria-hidden="true"
                  />
                </>
                :
                <PrismicLink field={slice.primary.link}>
                  <PrismicRichText field={slice.primary.linkLabel} />
                </PrismicLink>
              }
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              {slice.variation === "dropdownMenu" ?
                <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {slice?.items?.map((item, idx) => {
                        return (
                          // <PrismicRichText key={idx} field={item.dropdown_level_2_label} />
                          <PrismicLink
                            linkResolver={linkResolver}
                            field={item.dropdown_level_2_link}
                            key={idx}
                            className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <PrismicRichText
                              field={item.dropdown_level_2_label}
                              className="text-base font-medium text-gray-900"
                            />
                          </PrismicLink>
                        )
                      })}
                    </div>
                  </div>
                </Popover.Panel>
                : null}
            </Transition>
          </>
        )}
      </Popover>
    </>
  </section>
)

export default Menu