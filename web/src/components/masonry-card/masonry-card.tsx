import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import {buildImageObj, getBlogUrl} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'

import {
  MasonryCardWrapper,
  PostPreview,
  PostDetails,
  PostDate,
  PostTitle,
  PostTags,
  PostMeta,
  ReadingTime,
  ReadMore,
} from './masonry-card.style';
import { IoIosArrowForward } from 'react-icons/io';

interface MasonryCardProps {
  image?: any;
  title: string;
  url: string;
  date?: string;
  tags?: [];
  description: string;
  className?: string;
  imageType?: 'fixed' | 'fluid';
  overlay?: boolean;
}

const MasonryCard: React.FunctionComponent<MasonryCardProps> = ({
  image,
  title,
  url,
  date,
  tags,
  description,
  className,
  imageType,
  overlay,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['mesonry_card'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <MasonryCardWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
          <img
            src={imageUrlFor(buildImageObj(image))
              .width(600)
              .height(600)          
              .auto('format')
              .url()}
            alt={image.alt} />
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        <PostMeta>
          {date && (
            <PostDate
              dangerouslySetInnerHTML={{
                __html: date,
              }}
              className="post_date"
            />
          )}
        </PostMeta>

        <PostTitle className="post_title">
          <Link to={getBlogUrl(date, url)}>{title}</Link>
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
    </MasonryCardWrapper>
  );
};

MasonryCard.defaultProps = {
  imageType: 'fluid',
};

export default MasonryCard;
