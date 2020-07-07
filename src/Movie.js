import React from "react";
import PropsTypes from "prop-types";

function Movie({ id, title, year, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.prototype = {
  id: PropsTypes.number.isRequired,
  title: PropsTypes.string.isRequired,
  year: PropsTypes.number.isRequired,
  summary: PropsTypes.string.isRequired,
  poster: PropsTypes.string.isRequired,
};

export default Movie;
