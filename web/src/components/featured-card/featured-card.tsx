import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import {buildImageObj, getBlogUrl} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import {
  FeaturedCardWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  PostTags,
  PostMeta,
  ReadMore,
  Excerpt,
} from './featured-card.style';

interface FeaturedCardProps {
  image?: any;
  title: string;
  description?: any;
  releaseDate?: any;
  url: string;
  excerpt: string;
  artist: string;
  recordLabels: any;
  publishedAt: Date;
  className?: string;
  imageType?: 'fixed' | 'fluid';
  overlay?: boolean;
}

const FeaturedCard: React.FunctionComponent<FeaturedCardProps> = ({
  image,
  title,
  description,
  artist,
  releaseDate,
  url,
  className,
  recordLabels,
  publishedAt,
  imageType,
  excerpt,
  overlay,
  ...props
}) => {
  const addClass = ['featured_card'];

  if (overlay == true) {
    addClass.push('overlay');
  }

  if (className) {
    addClass.push(className);
  }

  return (
    <FeaturedCardWrapper className={addClass.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
          <img
            src={imageUrlFor(buildImageObj(image))
              .width(400)
              .height(400)
              .fit("fill")
              .auto('format')
              .url()}
            alt={image.alt}
          />
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        <PostTitle className="post_title">
          <Link to={getBlogUrl(publishedAt, url)}>{title}</Link>
        </PostTitle>

        <div>{artist} ({releaseDate.substring(0, 4)})</div>
        <hr/>



      </PostDetails>
      <ReadMore className="read_more">
          <Link to={url}>{overlay == true ? 'Read Story' : 'More information and track listing'}</Link>
        </ReadMore>
    </FeaturedCardWrapper>
  );
};

FeaturedCard.defaultProps = {
  imageType: 'fluid',
};

export default FeaturedCard;
