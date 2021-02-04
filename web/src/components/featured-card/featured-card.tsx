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
  description?: string;
  url: string;
  publishedAt: Date;
  className?: string;
  imageType?: 'fixed' | 'fluid';
  overlay?: boolean;
}

const FeaturedCard: React.FunctionComponent<FeaturedCardProps> = ({
  image,
  title,
  description,
  url,
  className,
  publishedAt,
  imageType,
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
  console.log(publishedAt)
  return (
    <FeaturedCardWrapper className={addClass.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
          <img
            src={imageUrlFor(buildImageObj(image))
              .width(600)
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
          <Link to={getBlogUrl(publishedAt, url)}>{title}</Link>
        </PostTitle>
        {overlay == true ? (
          ''
        ) : (
          <>
            {' '}
            {description && (
              <Excerpt
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
                className="excerpt"
              />
            )}
          </>
        )}

        <ReadMore className="read_more">
          <Link to={url}>{overlay == true ? 'Read Story' : 'Read More'}</Link>
        </ReadMore>
      </PostDetails>
    </FeaturedCardWrapper>
  );
};

FeaturedCard.defaultProps = {
  imageType: 'fluid',
};

export default FeaturedCard;
