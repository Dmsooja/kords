/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { PrismicRichText } from "@prismicio/react"

export function Content(data) {
    return (
        <div className="overflow-hidden bg-white">
            <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
                <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                    <div>
                        <h2 className="text-lg font-semibold text-indigo-600">Case Study</h2>
                        <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Meet Whitney</h3>
                    </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:col-start-2 lg:row-start-1">
                        <svg
                            className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                            <figure>
                                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                    <img
                                        className="rounded-lg object-cover object-center shadow-lg"
                                        src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                                        alt="Whitney leaning against a railing on a downtown street"
                                        width={1184}
                                        height={1376}
                                    />
                                </div>
                                <figcaption className="mt-3 flex text-sm text-gray-500">
                                    <span className="ml-2">Photograph by Marcus O’Leary</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="mx-auto max-w-prose text-base lg:max-w-none">
                            <p className="text-lg text-gray-500">
                                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                                pellentesque. Blandit amet, sed aenean erat arcu morbi.
                            </p>
                        </div>
                        <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                            <p>
                                Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                                pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
                            </p>
                            <p>
                                Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet
                                fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.
                            </p>
                            <p>
                                Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.
                            </p>
                            <ul role="list">
                                <li>Quis elit egestas venenatis mattis dignissim.</li>
                                <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                            </ul>
                            <p>
                                Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                                velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                                egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                            </p>
                            <h3>How we helped</h3>
                            <p>
                                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                                Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa,
                                lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
                            </p>
                            <p>
                                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                                pellentesque. Blandit amet, sed aenean erat arcu morbi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Header(data) {
    return (
        <div className="flex min-h-full flex-col bg-white lg:relative">
            <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={data?.image?.url}
                    alt={data?.image?.alt}
                />
            </div>
            <div className="flex flex-grow flex-col">
                <main className="flex flex-grow flex-col bg-white">
                    <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
                        <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                            <div className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                <PrismicRichText field={data?.name} />
                            </div>
                            <div className="mt-6">
                                <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                                    All articles
                                    <span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}