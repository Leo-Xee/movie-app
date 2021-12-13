import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MainMovieImage from '../MainImage/MainImage';
import MovieInfo from './MovieInfo/MovieInfo';

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;
const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

export default function MovieDetails(props) {
  const movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState(null);

  useEffect(() => {
    const endpointInfo = `${URL}movie/${movieId}?api_key=${KEY}&language=en-US&page=1`;
    const endpointCrew = `${URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US&page=1`;

    axios.get(endpointInfo).then((res) => {
      setMovie({ ...res.data });
    });
  }, []);

  return (
    <div>
      {Movie && (
        <MainMovieImage
          image={`${IMAGE_URL}w1280${Movie.backdrop_path}`}
          title={Movie.original_title}
          desc={Movie.overview}
        />
      )}

      <div style={{ width: '85%', margin: '1rem auto' }}>
        <br />
        {Movie && <MovieInfo movie={Movie} />}
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}
        >
          <button>Toggle Actor View</button>
        </div>
      </div>
    </div>
  );
}
