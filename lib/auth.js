export const listTweets = async () => {
  const url = 'https://jsonplaceholder.org/posts';

  const res = await fetch(url);

  if (res.status !== 200) {
    throw new Error(`Error fetching the api`);
  }

  return await res.json();
};
