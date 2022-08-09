import Head from "next/head";
import { Header } from "./Header/Header";
// import { Footer } from "./Footer";

export const Layout = ({ children, menu, footer, altLangs }) => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <Head>
        <title> Kords § Find your music </title>
      </Head>
      {menu?.data ?
        <Header menu={menu} altLangs={altLangs} />
        : null
      }
      <Header altLangs={altLangs} />
      <main>
        {children}
        </main>
      {/* {footer?.data ?
        <Footer footer={footer} />
        : null
      } */}
    </div>
  );
};
