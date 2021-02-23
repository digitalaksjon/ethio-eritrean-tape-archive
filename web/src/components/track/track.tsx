import * as React from 'react';
import { buildImageObj, getBlogUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import PlayAudio from 'react-simple-audio-player'
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
      <PlayAudio url={track.audioFile.asset.url} key={track._id} />
    </TrackWrapper>
  );
};

export default Track;

const options = {
  playlist: playlist,
  autoplay: false,
  autoplayDelayInSeconds: 2.1,
  style: { position: 'relative' },
  controls: ['playpause', 'forwardskip', 'progressdisplay']
}

