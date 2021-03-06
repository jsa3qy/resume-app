import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

export default class Photography extends React.Component {
  render() {
    return (
      <div>
        <Gallery photos={PHOTO_SET} direction={"column"} />
      </div>
    );
  }
}

const PHOTO_SET = [
    {
      src: './images/favoriteShots/teton-yosemite.jpg',
      width: 4.914,
      height: 3.275
    },
    {
      src: './images/favoriteShots/house-mountain.jpg',
      width: 5.813,
      height: 3.236
    },
    {
      src: './images/favoriteShots/butt-cave.jpg',
      width: 2.947,
      height: 3.703
    },
    {
      src: './images/favoriteShots/zion-sunset.jpg',
      width: 4.596,
      height: 3.064
    }
  ];

  const PHOTO_SET_2 = [
    {
      src: './images/favoriteShots/az-pandora.jpg',
      width: 6000,
      height: 4000
    },
    {
      src: './images/favoriteShots/river-sunrise.jpg',
      width: 5463,
      height: 3693
    },
    {
      src: './images/favoriteShots/snowy-trees.jpg',
      width: 3752,
      height: 3678
    },
    {
      src: './images/favoriteShots/zion-bump.jpg',
      width: 6000,
      height: 4000
    },
    {
      src: './images/favoriteShots/zion-side.jpg',
      width: 3206,
      height: 3599
    }
  ];

  const PHOTO_SET_3 = [
    {
      src: './images/favoriteShots/lake-rock.jpg',
      width: 6000,
      height: 4000
    },
    {
      src: './images/favoriteShots/foggy-landscape.jpg',
      width: 5845,
      height: 3654
    },
    {
      src: './images/favoriteShots/grass-shoot-sunset.jpg',
      width: 6000,
      height: 4000
    },
    {
      src: './images/favoriteShots/pink-moon.jpg',
      width: 6000,
      height: 4000
    },
    {
      src: './images/favoriteShots/river-canyon.jpg',
      width: 5485,
      height: 3999
    }
  ]