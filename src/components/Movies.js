import React from "react";
import requests from "../requests/requests";
import MovieRow from "./MovieRow";

function Movies() {
  return (
    <div>
      <MovieRow title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Movies;
