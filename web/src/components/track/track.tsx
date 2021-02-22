import * as React from 'react';
import Playlist from 'react-mp3-player';
import { buildImageObj, getBlogUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

import {
  TrackWrapper
} from './track.style';


type TrackProps = {
  tracks: any;

};


const Track: React.FunctionComponent<TrackProps> = ({
  tracks
}) => {

  var allTracks = []


  tracks.forEach((track, index) => (
          allTracks[index] = {
            img: 'https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg', 
            name: tracks[index].trackName,
            desc: 'Description 1', 
            src: tracks[index].audioFile.asset.url
          }
  ))



  const playlistOverideStylingOpts = {
    breakpoint: {
      maxWidth: 768
    }
  };
  return (
    <TrackWrapper>
      <Playlist tracks={allTracks} opts={playlistOverideStylingOpts}  autoPlay="0" />
      
    </TrackWrapper>
  );
};

export default Track;
