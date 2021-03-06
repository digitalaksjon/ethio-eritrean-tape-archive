import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';
import urljoin from 'url-join';
import { DiscussionEmbed } from 'disqus-react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostCard from '../components/post-card/post-card';
import PostDetails from '../components/post-details/post-details';
import Tracks from '../components/track/track';

import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
} from 'react-share';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoReddit,
} from 'react-icons/io';
import {
  BlogPostDetailsWrapper,
  RelatedPostWrapper,
  RelatedPostItems,
  RelatedPostTitle,
  RelatedPostItem,
  BlogPostFooter,
  PostShare,
  PostTags,
  BlogPostComment,
} from './templates.style';

const AlbumTemplate = (props: any) => {
  const album = props.data.sanityAlbum;
  const { edges } = props.data.albums;
  const title = album.title
  const slug = album.slug.current
  const siteUrl = props.data.site.siteMetadata.siteUrl;
  var shareUrl = urljoin(siteUrl, slug);

  console.log(props)

  const description = album._rawDescription.map(description => {
    return description.children[0].text;
  })

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  };



  return (
    <Layout>
      <SEO
        title={album.title}
        description={album.description || album._rawExcerpt}
      />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={album.title}
          date={album.releaseDate}
          album={album}
          cover={
            album.frontCover == null
              ? null
              : album.frontCover
          }
 
          artist={album.artist}
          description={description}
          imagePosition="left"
        />



      </BlogPostDetailsWrapper>

      {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>Related Tapes</RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({ node }: any) => (
              <RelatedPostItem key={node.slug.current}>

                <PostCard
                  title={node.title || node.slug.current}
                  url={urljoin(siteUrl, node.slug.current)}
                  description={node._rawExcerpt.map(description => {
                    return description.children[0].text;
                  })}
                  image={
                    node.frontCover == null
                      ? null
                      : node.frontCover
                  }

                />
              </RelatedPostItem>
            ))}
          </RelatedPostItems>
        </RelatedPostWrapper>
      )}
    </Layout>
  );
};

export default AlbumTemplate;

export const albumQuery = graphql`
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

  query AlbumsBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    
    sanityAlbum(slug: { current: { eq: $slug } }) {

      id
      title
      slug {
        current
      }
      country
      _rawDescription 
      releaseDate
      _rawExcerpt
      contributor
      genres {
        name
      }
      tracks {
        trackName
        audioFile {
          asset {
            url
          }
        }
      }
      artist
      musicians {
        fullName
        instruments {
          name
        }
      }
      recordLabel {
        name
      }
      contributor
      distributor {
        name
      }
      country
      frontCover {
        ...SanityImage
        alt
      }
      backCover {
        ...SanityImage
        alt
      }

    }

    albums: allSanityAlbum (
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
          releaseDate
          country
          _rawDescription 
          _rawExcerpt
          contributor
          artist
          recordLabel {
            name
          }
          frontCover {
            ...SanityImage
            alt
          }
        }
      }
    }
  }
`;
