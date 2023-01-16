import { useEffect, useState } from "react";
import { getRandomUsers } from "./apis/random-user-api";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import { RandomUser } from "./interfaces/random-user";
import { useAuthCheck } from "./utils/validate-token";

export default function Home() {
  const [randomUsers, setRandomUsers] = useState<RandomUser>({} as RandomUser);
  const [nextPage, setNextPage] = useState('');
    useAuthCheck();

    useEffect(() => {
      getRandomUsers().then((response) => {
        console.log(response)
        setRandomUsers(response.users[0]);
        setNextPage(response.nextPage)
      });
    }, []);


  return (
    <div>
      <Header />
      <h1>Home</h1>
      <UserCard 
        username={randomUsers.username} 
        fullName={randomUsers.fullName} 
        image={randomUsers.picture}
        email={randomUsers.email}
        age={randomUsers.age}
        />
    </div>
  );
}