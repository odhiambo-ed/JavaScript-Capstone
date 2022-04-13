async function getMovieData() {
  fetch("https://api.tvmaze.com/search/shows?q=girls")
      .then((res) => res.json())
      .then((final) => {
          return final.length;
      });
}

module.exports = getMovieData;
