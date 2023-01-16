import { Button, TextField } from "@material-ui/core";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useEffect, useState } from "react";
import { getRandomUsers } from "../../apis/random-user-api";
import Header from "../../components/Header";
import UserAlbumCard from "../../components/UserAlbumCard";
import { RandomUser } from "../../interfaces/random-user";
import { useAuthCheck } from "../../utils/validate-token";

export default function Home() {
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
    <div>
      <Header />
      <TextField
        label="Search"
        variant="outlined"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <h1>Home</h1>
      <UserAlbumCard users={filteredUsers} />
      <Button 
      variant="contained" 
      color="primary" 
      endIcon={<ArrowRightIcon />}
      onClick={handleLoadMore}
    >
      Load More
    </Button>
    </div>
  );
}