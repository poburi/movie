import React from "react";

function MovieDetail({ title, year, summary, genres, rating, poster }) {
  return (
    <section className="container movie-detail">
      <div className="movie">
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
          <p className="movie__summary">{summary}</p>
        </div>
      </div>
    </section>
  );
}

export default MovieDetail;
