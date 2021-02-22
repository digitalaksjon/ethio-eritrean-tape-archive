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


  const frontLarge = imageUrlFor(buildImageObj(frontCover))
    .width(800)
    .height(800)
    .fit("fill")
    .auto('format')
    .url()


  const frontThumb = imageUrlFor(buildImageObj(frontCover))
    .width(400)
    .height(400)
    .fit("fill")
    .auto('format')
    .url()


  const backLarge = imageUrlFor(buildImageObj(backCover))
    .width(800)
    .height(800)
    .fit("fill")
    .auto('format')
    .url()


  const backThumb = imageUrlFor(buildImageObj(backCover))
    .width(400)
    .height(400)
    .fit("fill")
    .auto('format')
    .url()

  const formattedImages = [
    {
      original: frontLarge,
      thumbnail: frontThumb
    },
    {
      original: backLarge,
      thumbnail: backThumb
    }

  ]
  return (
    <AlbumGalleryWrapper>
      <ImageGallery items={formattedImages} showPlayButton={false} showNav={false} useBrowserFullscreen={false} />
    </AlbumGalleryWrapper>
  );
};

export default AlbumGallery;
