import * as React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import _ from 'lodash';

import Track from '../../components/track/track'
import AlbumGallery from '../gallery/gallery';
import { buildImageObj, getBlogUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'


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
  artist?: string;
  date?: string;
  album?: object;
  description: any;
  tags?: [];
  cover?: object;
  className?: string;
  imagePosition?: 'left' | 'top';
};

const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
  title,
  date,
  description,
  album,
  artist,
  cover,
  tags,
  className,
  imagePosition,
  ...props
}) => {
  const addClass: string[] = ['post_details'];

  var currentPlayList = {
    playlistCoverUrl: imageUrlFor(buildImageObj(cover))
    .width(300)
    .height(300)
    .fit("fill")
    .auto('format')
    .url(),
    playlistName: title,
    bandName: artist,
    songs: [],
    type: 'album'
  }

  {album.tracks.map((track, index) => {
    currentPlayList.songs.push({
      position: index,
      songName: track.trackName,
      songUrl: track.audioFile.asset.url
    })
  })}

  console.log(currentPlayList)
  if (className) {
    addClass.push(className);
  }


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
         
           <div>
            <h4>Description:</h4> 
              <div>{description}</div>
           </div>
            <div>
                <h4>Genre(s): </h4>
                {album.genres.map(function(genre, index){
                  return <li key={index}>{genre.name}</li>;
                })}
            </div>


            <div>
              <h4>Label</h4>
        
                {album.recordLabel.map(function(label, index){
                  return <span key={index}>{label.name}</span>;
                })}
     
            </div>
     

            <div>
              <h4>Distributor </h4>
        
                {album.distributor.map(function(distributor, index){
                  return <span key={index}>{distributor.name}</span>
                })}
     
            </div>
            <div>
              <h4>Musicians</h4>
              {album.musicians.map(function(musician, index){
                  var instruments = musician.instruments.map(function(instrument,index ){
                          return <span>{instrument.name} /</span>;
                        });
                      })}
            </div>
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
                    return <div>
                    
                    <Track track={track} key={track._id} title={album.title} />
                    </div>
                })}
              </TracksWrapper>
            </div>
          </>
        
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

export default PostDetails;
