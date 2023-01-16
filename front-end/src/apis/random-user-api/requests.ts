export const getRandomUsers = async (url?:string) => {
  const uri = url ?? `https://randomuser.me/api/?page=1results=5`;
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
  const nextPage = `https://randomuser.me/api/?page=${data.info.page + 1}&results=5&seed=${data.info.seed}`;
  return { users, nextPage}
}
