const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const albumPost = path.resolve(`./src/templates/album.tsx`);

  return graphql(`
    fragment SanityImage on SanityMainImage {
      crop {
        _key
        _type
        top
        bottom
        left
        right
      }
      hotspot {
        _key
        _type
        x
        y
        height
        width
      }
      asset {
        _id
      }
    }
    query {
      site {
        siteMetadata {
          title
        }
      }

      albums: allSanityAlbum(
        sort: { fields: [publishedAt], order: DESC }
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            title
            slug {
              current
            }
            country
            _rawDescription
            _rawExcerpt
            contributor
            artist
            recordLabel {
              name
            }
            backCover {
              ...SanityImage
              alt
            }
            frontCover {
              ...SanityImage
              alt
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const albums = result.data.albums.edges;

    albums.forEach((album, index) => {
      const previous =
        index === albums.length - 1 ? null : albums[index + 1].node;
      const next = index === 0 ? null : albums[index - 1].node;

      createPage({
        path: album.node.slug.current,
        component: albumPost,
        context: {
          slug: album.node.slug.current,
          previous,
          next,
          tag: album.node.tags,
        },
      });
    });

    return null;
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    if (typeof node.frontmatter.slug !== "undefined") {
      createNodeField({
        node,
        name: "slug",
        value: node.frontmatter.slug,
      });
    } else {
      const value = createFilePath({ node, getNode });
      createNodeField({
        node,
        name: "slug",
        value,
      });
    }
  }
};

// for React-Hot-Loader: react-🔥-dom patch is not detected
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
  }
};
