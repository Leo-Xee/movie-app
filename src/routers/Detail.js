import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movie-details">
          <img
            className="movie-details-poster"
            src={location.state.poster}
            alt={location.state.title}
          />
          <div className="movie-details-data">
            <h2 className="movie-details-title">{location.state.title}</h2>
            <div className="movie-details-year">{location.state.year}</div>
            <ul className="movie-details-genres">
              {location.state.genres.map((genre, idx) => {
                return <li key={idx}>{genre}</li>;
              })}
            </ul>
            <p className="movie-details-summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
