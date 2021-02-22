import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import { buildImageObj, getBlogUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

import {
  AlbumGalleryWrapper
} from './gallery.style';


type GalleryProps = {
  frontCover: object;
  backCover: object;

};


const AlbumGallery: React.FunctionComponent<GalleryProps> = ({
  frontCover,
  backCover
}) => {


  const front = imageUrlFor(buildImageObj(frontCover))
    .width(800)
    .height(800)
    .fit("fill")
    .auto('format')
    .url()

  const back = imageUrlFor(buildImageObj(backCover))
    .width(800)
    .height(800)
    .fit("fill")
    .auto('format')
    .url()
  const formattedImages = [
    {
      original: front,
      thumbnail: front
    },
    {
      original: back,
      thumbnail: back
    }

  ]
  return (
    <AlbumGalleryWrapper>
      <ImageGallery items={formattedImages} />;
    </AlbumGalleryWrapper>
  );
};

export default AlbumGallery;
