import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import LanguageSwitcher from "./LanguageSwitcher";

const __allComponents = { ...components }

export const Header = ({ menu, altLangs }) => (
  <header className="relative -mb-px border-b border-neutral-200 bg-white px-6 py-4">
    <div className="mx-auto flex max-w-5xl items-baseline md:items-center">
      <PrismicLink href="/" className="relative -m-4 p-4 text-xl font-black">
        {/* <PrismicText field={menu?.data?.title} /> */}
        <img src={menu?.data?.logo?.url} alt={menu?.data?.logo.alt} />
      </PrismicLink>
      <nav className="flex-grow">
        <ul className="-ml-5 flex justify-end">
          <SliceZone slices={menu?.data?.slices} components={__allComponents} />
          <LanguageSwitcher altLangs={altLangs} />
        </ul>
      </nav>
    </div>
  </header>
);
