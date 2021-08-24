import axios from 'axios'

const getJokes = (category, query) => {
  const url = new URL("https://api.chucknorris.io/jokes/random");
  if (category) {
    const params = { category };
    url.search = new URLSearchParams(params).toString();
  } else if (query) {
    return axios.get(
      `https://api.chucknorris.io/jokes/search?query=${query}`
    )
  }
  return axios.get(url)
};

export default getJokes;



