import * as React from 'react';
import { buildImageObj, getBlogUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import options from './options'

import {
  TrackWrapper
} from './track.style';


type TrackProps = {
  tracks?: array;
  cover?: object;
  title: string;

};


var audioList1 = []
const Track: React.FunctionComponent<TrackProps> = ({
  tracks,
  cover,
  title
}) => {

  const coverImage = imageUrlFor(buildImageObj(cover))
  .width(200)
  .height(200)
  .fit("fill")
  .auto('format')
  .url()




  tracks.map(track => {
    audioList1.push(
    {    
      name: track.trackName,
      singer: title,
      cover: coverImage,
      musicSrc: track.audioFile.asset.url,
    }
  )
  });

  return (
    <TrackWrapper>
      <ul>
        {tracks.map(track => {
          return <li>{track.trackName}</li>
        })}
      </ul>
      <ReactJkMusicPlayer audioLists={audioList1} {...options} />
      
    </TrackWrapper>
  );
};

export default Track;

