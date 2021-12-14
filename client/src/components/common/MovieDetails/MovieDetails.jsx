import axios from 'axios';
import React, { useState, useEffect } from 'react';

import MainImage from '../MainImage/MainImage';
import MovieInfo from './MovieInfo/MovieInfo';
import GridCards from '../GridCards/GridCards';
import { Button, Row } from 'antd';

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;
const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

export default function MovieDetails(props) {
  const movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState(null);
  const [Crew, setCrew] = useState([]);
  const [castToggle, setcastToggle] = useState(false);

  useEffect(() => {
    const endpointInfo = `${URL}movie/${movieId}?api_key=${KEY}&language=en-US`;
    const endpointCrew = `${URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`;

    axios.get(endpointInfo).then((res) => {
      setMovie(res.data);
    });

    axios.get(endpointCrew).then((res) => {
      setCrew(res.data.cast);
    });
  }, []);

  const toggleCastView = () => {
    setcastToggle(!castToggle);
  };

  return (
    <div>
      {Movie && (
        <MainImage
          image={`${IMAGE_URL}w1280${Movie.backdrop_path}`}
          title={Movie.original_title}
          desc={Movie.overview}
        />
      )}

      <div style={{ width: '85%', margin: '10px auto' }}>
        <br />

        <div style={{ displaty: 'flex' }}>
          <Button>Favorite</Button>
        </div>

        {Movie && <MovieInfo movie={Movie} />}
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}
        >
          <Button onClick={toggleCastView}>Toggle Actor View</Button>
        </div>
        {castToggle && (
          <Row gutter={[16, 16]}>
            {Crew &&
              Crew.map(
                (cast, idx) =>
                  cast.profile_path && (
                    <React.Fragment key={idx}>
                      <GridCards
                        name={cast.original_name}
                        image={`${IMAGE_URL}w500${cast.profile_path}`}
                      />
                    </React.Fragment>
                  ),
              )}
          </Row>
        )}
      </div>
    </div>
  );
}
