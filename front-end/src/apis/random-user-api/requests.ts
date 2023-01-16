export const getRandomUsers = async (url?:string) => {
  const uri = url ?? `https://randomuser.me/api/?page=1&results=6`;
  const response = await fetch(uri);
  const data = await response.json();
  const users = data.results.map((user: any) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      username: user.login.username,
      picture: user.picture.large,
      age: user.dob.age,
    }
  });
  console.log('na requisição',users)
  const nextPage = `https://randomuser.me/api/?page=${data.info.page + 1}&results=6&seed=${data.info.seed}`;
  return { users, nextPage}
}
