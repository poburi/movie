import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, genres, rating }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres,
            rating,
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h4 className="movie__year">{year}</h4>
          <ul className="movie__genres">
            {genres.map((genre, idx) => (
              <li className="genres__genre" key={idx}>
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.prototype = {
  id: PropsTypes.number.isRequired,
  title: PropsTypes.string.isRequired,
  year: PropsTypes.number.isRequired,
  summary: PropsTypes.string.isRequired,
  poster: PropsTypes.string.isRequired,
  genres: PropsTypes.arrayOf(PropsTypes.string).isRequired,
  rating: PropsTypes.number,
};

export default Movie;
