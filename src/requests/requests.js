const api_key = "b098828deda6596a13b0f4ca88eb6933";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&with_networks=123`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
  fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchMoviesGenres: `/genre/movie/list?api_key=${api_key}&language=en-US`,
};

export default requests;
