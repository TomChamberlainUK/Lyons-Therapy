const siteUrl = 'https://lyonstherapy.co.uk';

module.exports = {
  siteMetadata: {
    title: "Lyons Therapy",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: '/',
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages }
        }) => {
          return allPages;
        },
        serialize: ({ path }) => {
          const entry = {
            url: path,
            changefreq: 'yearly',
            priority: 0.5
          }
          return entry;
        }
      }
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Lyons Therapy",
        short_name: "Lyons Therapy",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        icon: "src/images/favicon.svg",
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-smoothscroll"
  ],
};