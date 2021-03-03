import React from "react";
import PropsType from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title}></img>
      <div className="movie-data">
        <h2 className="movie-title">{title}</h2>
        <h5 className="movie-year">{year}</h5>
        <ul className="movie-genres">
          {genres.map((genre, idx) => {
            return <li key={idx}>{genre}</li>;
          })}
        </ul>
        <p>{summary.slice(0, 130)}...</p>
      </div>
    </div>
  );
}

Movie.PropsType = {
  id: PropsType.number.isRequired,
  title: PropsType.string.isRequired,
  summary: PropsType.string.isRequired,
  poster: PropsType.string.isRequired,
  genres: PropsType.arrayOf(PropsType.string).isRequired,
};

export default Movie;
