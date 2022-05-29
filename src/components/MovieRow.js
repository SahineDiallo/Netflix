import axios from "../axios/axios";
import React, { useEffect, useState } from "react";
import "./MovieRow.css";
import { StarIcon } from "@heroicons/react/solid";

const MovieRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchedMovies = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchedMovies();
  }, [fetchUrl]);
  return (
    <div className="pl-4 position-relative ">
      <div className="div__right"></div>
      <div className="div__left"></div>
      <div className="movies text-white px-3">
        <h5 className="py-3">{title}</h5>
        <div className="d-flex align-items-center mx-0 position-relative">
          {movies.map((movie, i) => (
            <div key={i} className="movie__poster lg">
              <img
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                alt=""
                className=""
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
    </div>
  );
};

export default MovieRow;
