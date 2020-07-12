import React from "react";
import MovieDetail from "../components/MovieDetail";

class Detail extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    console.log(location.state);
    if (location.state) {
      return (
        <MovieDetail
          title={location.state.title}
          year={location.state.year}
          poster={location.state.poster}
          summary={location.state.summary}
          genres={location.state.genres}
          rating={location.state.rating}
        />
      );
    } else {
      return null;
    }
  }
}

export default Detail;
