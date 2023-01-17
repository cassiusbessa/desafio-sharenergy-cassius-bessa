/* eslint-disable no-loop-func */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { getDogImageUrl } from '../../apis/dogs-api';
import { useStyles } from './styles';
import Header from '../../components/Header';

export default function DogImage() {
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState('');

  const handleButtonClick = async () => {
    let url = await getDogImageUrl();
    const validImageExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
    while (!validImageExtensions.some((extension) => url.includes(extension))) {
      const newUrl = await getDogImageUrl();
      url = newUrl;
    }
    setImageUrl(url);
  };

  return (
    <>
    <Header />
      <div className={classes.root}>
        <Button variant="contained" color="primary" className={classes.button} onClick={handleButtonClick}>
          Me mostre um doguinho
        </Button>
        {imageUrl && (
          <img src={imageUrl} className={classes.image} alt="doggo" />
          )}
      </div>
    </>
  );
}