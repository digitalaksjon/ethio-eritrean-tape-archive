import * as React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import _ from 'lodash';

import Track from '../../components/track/track'
import AlbumGallery from '../gallery/gallery';

import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostPreview,
  TracksWrapper,
  PostDescriptionWrapper,
  PostDescription,
  PostTags,
} from './post-details.style';

type PostDetailsProps = {
  title: string;
  date?: string;
  album?: object;
  description: any;
  tags?: [];
  className?: string;
  imagePosition?: 'left' | 'top';
};

const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
  title,
  date,

  description,
  album,
  tags,
  className,
  imagePosition,
  ...props
}) => {
  const addClass: string[] = ['post_details'];



  if (className) {
    addClass.push(className);
  }
  console.log(album.tracks)

  return (
    <PostDetailsWrapper {...props} className={addClass.join(' ')}>

        <>
          {album.frontCover == null ? null : (
            <PostPreview className="post_preview">

              <AlbumGallery frontCover={album.frontCover} backCover={album.backCover} />

            </PostPreview>
          )}
        </>




      <PostDescriptionWrapper className="post_des_wrapper">

          <>
            <PostTitle>{title}</PostTitle>
            <PostDate><h4>Relase date</h4> {date}</PostDate>
         
           <p>
            <h4>Description:</h4> 
              <div>{description}</div>
           </p>
            <p>
                <h4>Genre(s): </h4>
                {album.genres.map(function(genre, index){
                  return <li key={index}>{genre.name}</li>;
                })}
            </p>


            <p>
              <h4>Label</h4>
        
                {album.recordLabel.map(function(label, index){
                  return <span key={index}>{label.name}</span>;
                })}
     
            </p>
     

            <p>
              <h4>Distributor </h4>
        
                {album.distributor.map(function(distributor, index){
                  return <span key={index}>{distributor.name}</span>
                })}
     
            </p>
            <p>
              <h4>Musicians</h4>
              {album.musicians.map(function(musician, index){
                  var instruments = musician.instruments.map(function(instrument,index ){
                          return <>{instrument.name} /</>;
                        });
                        return <li key={index}>{musician.fullName} ({instruments})</li>;
                      })}
            </p>
              <div>
                <h4>Contributor: </h4>{album.contributor}
              </div>
              <div>
                <h4>Country / Region: </h4>{album.country}
              </div>
              
            <div>
              <h4>Tracks: </h4>
              <TracksWrapper>
              {album.tracks.map(track => {
                   return <>
                   
                   <Track track={track} title={album.title} />
                   </>
              })}
              </TracksWrapper>
            </div>
          </>
        
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

PostDetails.defaultProps = {
  imagePosition: 'left',
};

export default PostDetails;
