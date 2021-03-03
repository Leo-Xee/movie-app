import React from "react";
import { Link } from "react-router-dom";
import PropsType from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
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
          <p>{summary.slice(0, 100)}...</p>
        </div>
      </div>
    </Link>
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
