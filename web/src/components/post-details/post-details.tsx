import * as React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import _ from 'lodash';

import AlbumGallery from '../gallery/gallery';

import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription,
  PostTags,
} from './post-details.style';

type PostDetailsProps = {
  title: string;
  date?: string;
  front?: any;
  back?: any;
  description: any;
  tags?: [];
  className?: string;
  imagePosition?: 'left' | 'top';
};

const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
  title,
  date,
  front,
  back,
  description,
  tags,
  className,
  imagePosition,
  ...props
}) => {
  const addClass: string[] = ['post_details'];



  if (className) {
    addClass.push(className);
  }

  return (
    <PostDetailsWrapper {...props} className={addClass.join(' ')}>

      {imagePosition === 'left' ? (
        <>
          {front == null ? null : (
            <PostPreview className="post_preview">

              <AlbumGallery frontCover={front} backCover={back} />

            </PostPreview>
          )}
        </>
      ) : (
          ''
        )}

      {imagePosition === 'top' ? (
        <>
          <PostTitle>{title}</PostTitle>
          <PostDate>{date}</PostDate>
        </>
      ) : (
          ''
        )}

      {imagePosition === 'top' ? (
        <>
          {front == null ? null : (
            <PostPreview className="post_preview">
              <Img fluid={front} alt={title} />
            </PostPreview>
          )}
        </>
      ) : (
          ''
        )}
      <PostDescriptionWrapper className="post_des_wrapper">
        {imagePosition === 'left' ? (
          <>
            <PostTitle>{title}</PostTitle>
            <PostDate>{date}</PostDate>
          </>
        ) : (
            ''
          )}
        <PostDescription
          dangerouslySetInnerHTML={{ __html: description }}
          className="post_des"
        />

      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

PostDetails.defaultProps = {
  imagePosition: 'top',
};

export default PostDetails;
