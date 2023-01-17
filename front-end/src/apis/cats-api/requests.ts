export const getCatStatusCode = async (statusCode: string) => {
  const url = `https://http.cat/${statusCode}.jpg`;
  return url
}