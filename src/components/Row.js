import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios/axios";
import requests from "../requests/requests";
import { StarIcon } from "@heroicons/react/solid";

const Row = () => {
  const [movies, setMovies] = useState([]);
  //   const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchedMovies = async () => {
      const popularMovies = await axios.get(requests.fetchTopRated);
      setMovies(popularMovies.data.results);
      return popularMovies;
    };
    fetchedMovies();
  }, []);

  return (
    <div className="text-white d-flex align-items-start w-100 px-4">
      <div className="movies position-relative">
        <div className="div__row_right"></div>
        <h5>Popular Movies</h5>
        <div className="d-flex align-items-center position-relative mx-0">
          {movies.map((movie) => (
            <div key={movie?.title} className="movie__poster">
              <img
                src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                alt=""
                className="position-relative"
              />
              <div className="movie__details">
                <p className="movie__name">{movie?.title}</p>
                <small className="movie__desc">{movie?.overview}</small>
                <small className="d-flex align-items-center">
                  {Array(Math.round(movie?.vote_average / 2))
                    .fill()
                    .map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="genres px-3 position-relative">
        <h4>Movies By Genres</h4>
        <div className="genres__left"></div>
        <button>Action</button>
        <button>Adventure</button>
        <button>Animation</button>
        <button>Comedy</button>
        <button>Crime</button>
        <button>Family</button>
        <button>Horror</button>
        <button>Music</button>
        <button>Romance</button>
        <button>History</button>
        <button>Thriller</button>
        <button>Scientce Fiction</button>
        <button>Drama</button>
      </div>
    </div>
  );
};

export default Row;
