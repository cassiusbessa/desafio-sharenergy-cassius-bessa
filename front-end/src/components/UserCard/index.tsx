import React from 'react';
import { useStyles } from './styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

interface UserCardProps {
  image: string;
  fullName: string;
  email: string;
  username: string;
  age: string;
}

export default function UserCard({ image, fullName, email, username, age }: UserCardProps ) {
  const classes = useStyles();
  console.log(image, fullName, email, username, age)
  return (
    <Card className={classes.root}>
      <CardActionArea>
          <Avatar
            src={image}
            alt={fullName}
            variant="rounded"
            style={{ width: '100px', height: '100px'}}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {fullName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email: {email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Username: {username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Idade: {age}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}