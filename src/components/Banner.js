import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios/axios";
import requests from "../requests/requests";
import { PlayIcon, ViewListIcon } from "@heroicons/react/solid";

const Banner = () => {
  const [originalBanner, setOriginalBanner] = useState([]);
  const truncate = (string, n = 150) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  useEffect(() => {
    const fetch = async () => {
      const fetchedData = await axios.get(requests.fetchNetflixOriginals);
      const rand_index = Math.floor(
        Math.random() * fetchedData.data.results.length - 1
      );
      setOriginalBanner(fetchedData.data.results[rand_index]);
      return fetchedData;
    };
    fetch();
  }, []);
  return (
    <div
      className="banner position-relative"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${originalBanner?.backdrop_path}")`,
      }}
    >
      <div className="banner__right">
        <div className="banner__content">
          <p>TODAY FEATURED FILM</p>
          <h2 className="movie__title">
            ${originalBanner?.name || originalBanner?.original_name} (
            {originalBanner?.first_air_date?.slice(0, 4)})
          </h2>
          <div className="d-flex gap-3 align-items-center">
            <button>
              <PlayIcon />
              Play
            </button>
            <button>
              <ViewListIcon />
              My List
            </button>
          </div>
          <small>{truncate(originalBanner?.overview)}</small>
        </div>
      </div>
      <div className="banner__left"></div>
    </div>
  );
};

export default Banner;
