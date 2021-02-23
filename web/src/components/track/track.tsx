import * as React from 'react';
import { buildImageObj, getBlogUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {
  TrackWrapper
} from './track.style';


type TrackProps = {
  track?: array;
  title?:string;

};


var playlist = []
const Track: React.FunctionComponent<TrackProps> = ({
  track,
  title
}) => {





  return (
    <TrackWrapper>
      <h4>{track.trackName} / {title}</h4>
      <AudioPlayer        
        
        src={track.audioFile.asset.url}
        onPlay={e => console.log("onPlay")}
        // other props here
      />
    </TrackWrapper>
  );
};

export default Track;
