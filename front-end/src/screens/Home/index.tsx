import { Button, TextField } from "@material-ui/core";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useEffect, useState } from "react";
import { getRandomUsers } from "../../apis/random-user-api";
import Header from "../../components/Header";
import UserAlbumCard from "../../components/UserAlbumCard";
import { RandomUser } from "../../interfaces/random-user";
import { useAuthCheck } from "../../utils/validate-token";
import { useStyles } from './styles';

export default function Home() {
  const classes = useStyles();
  const [randomUsers, setRandomUsers] = useState<RandomUser[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<RandomUser[]>([]);
  const [nextPage, setNextPage] = useState('');
    useAuthCheck();

    useEffect(() => {
      getRandomUsers().then((response) => {
        setRandomUsers(response.users);
        setFilteredUsers(response.users);
        setNextPage(response.nextPage)
      });
    }, []);

    useEffect(() => {
      console.log(searchValue)
      const filteredUsers = randomUsers.filter(user => 
          user.name.includes(searchValue) ||
          user.email.includes(searchValue) ||
          user.username.includes(searchValue)
      );
      setFilteredUsers(filteredUsers);
  }, [searchValue, randomUsers])

    const handleLoadMore = () => {
      getRandomUsers(nextPage).then((response) => {
        setRandomUsers(response.users);
        setFilteredUsers(response.users);
        setNextPage(response.nextPage)
      });
    }


  return (
    <>
      <Header />
      <div className={classes.root}>
        <div className={classes.formContainer}>
          <TextField
            className={classes.textField}
            label="Search"
            variant="outlined"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <Button 
          className={classes.button}
          variant="contained" 
          color="primary" 
          endIcon={<ArrowRightIcon />}
          onClick={handleLoadMore}
        >
          Load More
        </Button>
        </div>
        <UserAlbumCard users={filteredUsers} />
    </div>
  </>
  );
}