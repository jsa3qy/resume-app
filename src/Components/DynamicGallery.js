import React from 'react';
import ImageGallery from 'react-image-gallery';

const images1 = [
  {
    original: './images/me/solitude.jpg',
    thumbnail: './images/me/solitude.jpg',
  },
  {
    original: './images/me/Glacier.jpg',
    thumbnail: './images/me/Glacier.jpg',
  },
  {
    original: './images/me/washington.jpg',
    thumbnail: './images/me/washington.jpg',
  },
];

const images2 = [
  {
    original: './images/favoriteShots/zion-bump.jpg',
    thumbnail: './images/favoriteShots/zion-bump.jpg',
  },
  {
    original: './images/favoriteShots/house-mountain.jpg',
    thumbnail: './images/favoriteShots/house-mountain.jpg',
  },
  {
    original: './images/favoriteShots/river-canyon.jpg',
    thumbnail: './images/favoriteShots/river-canyon.jpg',
  },
  {
    original: './images/favoriteShots/teton-yosemite.jpg',
    thumbnail: './images/favoriteShots/teton-yosemite.jpg',
  },
  {
    original: './images/favoriteShots/zion-sunset.jpg',
    thumbnail: './images/favoriteShots/zion-sunset.jpg',
  },
];

export class Gallery1 extends React.Component {
  render() {
    return <ImageGallery items={images1}
    infinite={false}
    showNav={false}
    showFullscreenButton={false}
    showPlayButton={false}
    showBullets={true}
    />;
  }
}

export class Gallery2 extends React.Component {
  render() {
    return  <ImageGallery items={images2}
    infinite={false}
    showNav={false}
    showFullscreenButton={false}
    showPlayButton={false}
    showBullets={true}
    />;
  }
}
