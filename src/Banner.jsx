import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios/axios";
import requests from "./requests/requests";
function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request?.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  //   console.log(movie);
  function truncate(str, n) {
    return str?.lenght > n ? str.substr(0, n - 1) + "..." : str;
    // return str?.lenght > n ? str.slice(0, n - 1) + "..." : str;
    
  }
//slice=substr
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title ||
            movie?.name ||
            movie?.original_name ||
            movie?.original_title}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      {/* <div className="banner_fadeBottom" /> */}
    </header>
  );
}
export default Banner;


