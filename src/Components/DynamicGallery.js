import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: './images/favoriteShots/teton-yosemite.jpg',
    thumbnail: './images/favoriteShots/teton-yosemite.jpg',
  },
  {
    original: './images/favoriteShots/house-mountain.jpg',
    thumbnail: './images/favoriteShots/house-mountain.jpg',
  },
  {
    original: './images/favoriteShots/butt-cave.jpg',
    thumbnail: './images/favoriteShots/butt-cave.jpg',
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images}
    infinite={false}
    showNav={false}
    showFullscreenButton={false}
    showPlayButton={false}
    showBullets={true}
    />;
  }
}

export default MyGallery;