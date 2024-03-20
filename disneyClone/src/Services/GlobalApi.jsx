//   https://api.themoviedb.org/3/movie/550?api_key=44d3731aea94b2e4d85d12d43fa3a407

import axios from "axios";

const movieBaseUrl = "http://api.themoviedb.org/3";

const api_key = "44d3731aea94b2e4d85d12d43fa3a407";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=44d3731aea94b2e4d85d12d43fa3a407";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) => {
  console.log("etting the data");
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
};

// https://api.themoviedb.org/3/discover/movie?api_key=44d3731aea94b2e4d85d12d43fa3a407&with_genres=37
