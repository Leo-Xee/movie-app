import { Button, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import GridCards from '../../common/GridCards/GridCards';
import MainImage from '../../common/MainImage/MainImage';

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;
const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

function LandingPage(props) {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    const endpoint = `${URL}movie/popular?api_key=${KEY}&language=en-US&page=${currentPage}`;
    console.log(endpoint);
    getMoives(endpoint);
  }, []);

  const getMoives = (endpoint) => {
    axios.get(endpoint).then((res) => {
      console.log(res.data.results);
      setMovies([...res.data.results]);
      setMainMovieImage(res.data.results[1]);
    });
  };

  const loadMoreHandler = () => {
    const endpoint = `${URL}movie/popular?api_key=${KEY}&language=en-US&page=${
      currentPage + 1
    }`;

    axios.get(endpoint).then((res) => {
      setMovies([...Movies, ...res.data.results]);
      setcurrentPage(currentPage + 1);
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
                  LandingPage
                  movieId={movie.id}
                  image={`${IMAGE_URL}w500${movie.poster_path}`}
                  title={movie.original_title}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={loadMoreHandler}>Load More</Button>
      </div>
    </div>
  );
}

export default withRouter(LandingPage);
