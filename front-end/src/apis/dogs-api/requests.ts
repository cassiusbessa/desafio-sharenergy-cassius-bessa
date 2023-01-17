export const getDogImageUrl = async () => {
  const response = await fetch('https://random.dog/woof.json');
  const data = await response.json();
  return data.url;
}