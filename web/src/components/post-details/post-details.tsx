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
            <PostDate>Relase date: {date}</PostDate>
         
            <div>Description: <div>{description}</div></div>
         
            <div>
                <span>Genre(s): </span>
                {album.genres.map(function(genre, index){
                  return <li key={index}>{genre.name}</li>;
                })}
            </div>


            <div>
              <span>Label: </span>
        
                {album.recordLabel.map(function(label, index){
                  return <span key={index}>{label.name}</span>;
                })}
     
            </div>
     

            <div>
              <span>Distributor: </span>
        
                {album.distributor.map(function(distributor, index){
                  return <span key={index}>{distributor.name}</span>;
                })}
     
            </div>
  

            
            <div>
              {album.musicians.map(function(musician, index){
                  var instruments = musician.instruments.map(function(instrument,index ){
                          return <li key={index}>Instrument: {instrument.name}</li>;
                        });
                        return <li key={index}>Musician: {musician.fullName} <ul>{instruments}</ul></li>;
                      })}
            </div>
              <div>
                <span>Contributor: </span>{album.contributor}
              </div>
              <div>
                <span>Country / Region: </span>{album.country}
              </div>
              
            <div>
              <span>Tracks: </span>
                <Track tracks={album.tracks} title={album.title} cover={album.frontCover} />
     
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
