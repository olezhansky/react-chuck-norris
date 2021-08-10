const getJokes = (category, query) => {
  const url = new URL("https://api.chucknorris.io/jokes/random");
  // console.log(category, query);
  if (category) {
    const params = { category };
    url.search = new URLSearchParams(params).toString();
  } else if (query) {
    //     const params = { query };
    //     url.search = new URLSearchParams(params).toString();
    return fetch(
      `https://api.chucknorris.io/jokes/search?query=${query}`
    ).then((response) => response.json());
  }
  return fetch(url).then((response) => response.json());
};

export default getJokes;

// else if (query) {
//         fetch(`https://api.chucknorris.io/jokes/search?query=Rome`)
//    }
// https://api.chucknorris.io/jokes/random
// https://api.chucknorris.io/jokes/random?category={category}
// https://api.chucknorris.io/jokes/search?query={query}
// else if (query) {
//         const params = { query }
//         url.search = new URLSearchParams("search" + params).toString()
//         console.log(query);
// }
