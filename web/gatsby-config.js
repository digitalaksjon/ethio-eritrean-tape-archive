// Load variables from '.env' as soon as possible
require("dotenv").config({
  path: '.env.${process.env.NODE_ENV || "development"}',
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

require("dotenv").config({
  path: ".env.${process.env.NODE_ENV}",
});

module.exports = {
  siteMetadata: {
    title: "Ethio-Eritrean Tape Archive",
    author: "Digital Aksjon",
    about:
      "Every company has a story to tell, so break out your storytelling skills from that random English class you took years ago and put them to work on your “About Us” page. Using descriptive and emotive copy and gorgeous graphics, an “About Us” page with a story works.",
    description: "Fantastic tapes from the horn of Africa",
    siteUrl: "http://localhost:8000/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
    },
    {
      resolve: "gatsby-plugin-postcss",
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./content/blog",
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./content/assets",
        name: "assets",
      },
    },

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          {
            resolve: "gatsby-remark-mermaid",
          },
          {
            resolve: "gatsby-remark-prismjs",
          },

          {
            resolve: "gatsby-remark-copy-linked-files",
          },
          {
            resolve: "gatsby-remark-smartypants",
          },
          {
            resolve: "gatsby-remark-reading-time",
          },
        ],
      },
    },
    {
      resolve: "gatsby-transformer-sharp",
    },
    {
      resolve: "gatsby-plugin-sharp",
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        //trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,//'ADD YOUR TRACKING ID HERE',
      },
    },
    {
      resolve: "gatsby-plugin-feed",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "StoryHub - Agency Blog",
        short_name: "StoryHub",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/assets/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
    },
    {
      resolve: "gatsby-plugin-react-helmet",
    },
    {
      resolve: "gatsby-plugin-lodash",
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Poppins:300,400,500,600,700",
          "Fira Sans:100,300,400,500,600,700",
        ],
        display: "swap",
      },
    },
  ],
};
