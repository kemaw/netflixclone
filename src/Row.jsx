import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios/axios";
import YouTube from "react-youtube";

import movieTrailer from "movie-trailer";
// const base_url = "https://media.themoviedb.org/t/p/w220_and_h330_face/";
const base_url = "https://image.tmdb.org/t/p/original/";

// "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); // state for movies fetch from the API
  const [trailerUrl, setTrailerUrl] = useState(""); // state for the trailer URL store youtube trailer URL

  useEffect(() => {
    async function fetchData() {
      let request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  // console.log(movies);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.title ||
          movie?.name ||
          movie?.original_name ||
          movie?.original_title
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row ms-5 mt-5">
      <h1>{title}</h1>
      <div className="row_posters overflow-y-hidden overflow-x-scroll p-2">
        {movies?.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
