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
  console.log(description)
  return (
    <FeaturedCardWrapper className={addClass.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
          <img
            src={imageUrlFor(buildImageObj(image))
              .width(400)
              .height(400)          
              .auto('format')
              .url()}
            alt={image.alt}
          />
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">


        <PostTitle className="post_title">

          <Link to={getBlogUrl(publishedAt, url)}>{title} /<br /> {artist}</Link>
        </PostTitle>
        {overlay == true ? (
          ''
        ) : (
          <>
            {' '}
            {excerpt && (
              <Excerpt
                dangerouslySetInnerHTML={{
                  __html: excerpt,
                }}
                className="excerpt"
              />
            )}
          </>
        )}
        <PostMeta>

        <div className="meta_line">Label: <span>
          
        {recordLabels.map(recordLabel => {
            return recordLabel.name
         
        })}
        </span></div>
        <div className="meta_line">
        {description.map(desc => {
            return desc.text;
        })}
        </div>
        </PostMeta>

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
