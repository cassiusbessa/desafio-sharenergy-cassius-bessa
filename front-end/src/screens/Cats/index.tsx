import React, { useState } from 'react';
import { useStyles } from './styles';
import { getCatStatusCode, surpriseUrl } from '../../apis/cats-api';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { allStatusCodes } from '../../utils/status-codes';

export default function CatStatusCodePage() {
  const classes = useStyles();
  const [statusCode, setStatusCode] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [arrayCodes] = useState(allStatusCodes);

  const handleSearch = async () => {
    if (!arrayCodes.includes(statusCode)) {
      setImageUrl(surpriseUrl);
      return
    }
    const url = await getCatStatusCode(statusCode);
    setImageUrl(url);
  };

  return (
    <div className={classes.root}>
        <h1>Procure o seu gatinho fofo</h1>
      <div className={classes.searchContainer}>
        <TextField
          label="Status Code"
          className={classes.textField}
          value={statusCode}
          onChange={(e) => setStatusCode(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <Typography variant="caption">
        Tente estes valores: 100, 200, 201, 300, 400, 404, 500
      </Typography>
      <div className={classes.imageContainer}>
        {imageUrl && <img src={imageUrl} className={classes.image} alt="cat status code" />}
      </div>
    </div>
  );
}