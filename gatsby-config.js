/*module.exports = {
  siteMetadata: {
    title: `Deligence`,
    description: `Deligence site powered by WordPress and Gatsby`,
    author: `Deligence Team`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
      //  url: `http://localhost/Testingsite/graphql`,
        url: `https://botryose-hyperkeratotic-emelia.ngrok-free.dev/Testingsite/graphql`,
        schema: {
          timeout: 60000, // 60s
          perPage: 20,    // fetch data in smaller chunks
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 3,      // download 3 files at once
              maxFileSizeBytes: 20000000, // limit to 20MB
            },
          },
        },
        develop: {
          hardCacheMediaFiles: true,
        },
        production: {
          hardCacheMediaFiles: true,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
*/
module.exports = {
  siteMetadata: {
    title: "My Gatsby WordPress Site",
    description: "A blazing fast site powered by WordPress + Gatsby",
    author: "@yourname",
    siteUrl: "https://your-site.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://botryose-hyperkeratotic-emelia.ngrok-free.dev/Testingsite/graphql",
        schema: {
          timeout: 30000,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 5,
            },
          },
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
  ],
}
