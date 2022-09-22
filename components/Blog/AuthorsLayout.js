import { PrismicRichText } from "@prismicio/react";

export function Header({data}) {
    return (
        <div className="relative">
            <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        Meet
                        <span className="block text-indigo-600 xl:inline">
                            <PrismicRichText field={data.name} />
                        </span>
                    </h1>
                    <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                    {/* <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                            >
                                Get started
                            </a>
                        </div>
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                            >
                                Live demo
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={data.image.url} alt={data.image.alt}
                />
            </div>
        </div>
    )
}

export function Content(data) {
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