import Head from "next/head";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/FooterLinks";

export const Layout = ({ children, menu, footer, altLangs }) => {
  return (
    <div>
      <div>
        <Head>
          <title> Kords - Find your music </title>
        </Head>
        {menu?.data ?
          <Header menu={menu} altLangs={altLangs} />
          : null
        }
        <main className="mb-10">
          {children}
        </main>
      </div>
      {footer?.data ?
        <Footer footer={footer} />
        : null
      }
    </div>
  );
};
