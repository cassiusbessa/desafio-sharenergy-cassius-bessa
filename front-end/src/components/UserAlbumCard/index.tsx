import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserCard from '../UserCard';
import { useStyles } from './styles';
import { RandomUser } from '../../interfaces/random-user';

interface UserAlbumCardProps {
  users: RandomUser[];
}

export default function UserAlbumCard({ users }: UserAlbumCardProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.cardContainer} justifyContent="center">
        <Grid item xs={4} lg={6}>
          <Grid container spacing={1} alignItems="center" justifyContent='flex-end'>
            {users.slice(0,3).map((user, index) => (
              <Grid item xs={4} sm={6} lg={8} key={index}>
                <UserCard image={user.picture} {...user} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={4} lg={6}>
          <Grid container spacing={1} alignItems="center">
            {users.slice(3,6).map((user, index) => (
              <Grid item xs={4} sm={6} lg={8} key={index}>
                <UserCard image={user.picture} {...user} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}