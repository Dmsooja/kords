const prismic = require("@prismicio/client");

const sm = require("./sm.json");

const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return {
    reactStrictMode: true,
    i18n: {
      locales,
      defaultLocale: "en-us",
      localeDetection: false,
    },
    images: {
      loader: "imgix",
      path: "",
    },
  };
};

module.exports = nextConfig;


// /**
//  * @returns {import('next').NextConfig}
//  */
// module.exports = async () => {
//   const client = prismic.createClient(sm.apiEndpoint);

//   const repository = await client.getRepository();
//   const locales = repository.languages.map((lang) => lang.id);

//   return {
//     i18n: {
//       locales,
//       defaultLocale: locales[0],
//     },
//     images: {
//       loader: "imgix",
//       path: "",
//     },
//   };
// };
