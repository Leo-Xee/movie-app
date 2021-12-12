import { Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import GridCards from '../common/GridCards';
import MainImage from './MainImage/MainImage';

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;
const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

console.log(process.env);
function LandingPage(props) {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);

  useEffect(() => {
    const endpoint = `${URL}movie/popular?api_key=${KEY}&language=en-US&page=1`;
    getMoives(endpoint);
  }, []);

  const getMoives = (endpoint) => {
    axios.get(endpoint).then((res) => {
      console.log(res.data.results);
      setMovies([...Movies, ...res.data.results]);
      setMainMovieImage(res.data.results[1]);
    });
  };

  return (
    <div>
      {MainMovieImage && (
        <MainImage
          image={`${IMAGE_URL}w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.original_title}
          desc={MainMovieImage.overview}
        />
      )}
      <div style={{ width: '85%', margin: '1rem auto' }}>
        <h2>Movies by lastest</h2>
        <hr />
        <Row gutter={[16, 16]}>
          {Movies &&
            Movies.map((movie, idx) => (
              <React.Fragment key={idx}>
                <GridCards
                  movieId={movie.id}
                  image={`${IMAGE_URL}w500${movie.poster_path}`}
                  title={movie.original_title}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button>Load More</button>
      </div>
    </div>
  );
}

export default withRouter(LandingPage);
