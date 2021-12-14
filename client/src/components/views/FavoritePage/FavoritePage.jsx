import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Favorite.css';
import { Popover } from 'antd';

const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

function FavoritePage() {
  const [Favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavoredMovie();
  }, []);

  const fetchFavoredMovie = () => {
    axios
      .post('/api/favorite/getFavoriteMovies', {
        userFrom: localStorage.getItem('userId'),
      })
      .then((res) => {
        if (res.data.success) {
          setFavorites(res.data.favorites);
          console.log(res.data);
        } else {
          alert('영화 정보를 가져오는데 실패 했습니다.');
        }
      });
  };

  const onClickDelete = (movieId, userFrom) => {
    const variables = {
      movieId,
      userFrom,
    };

    axios.post('/api/favorite/removeFromFavorites', variables).then((res) => {
      if (res.data.success) {
        fetchFavoredMovie();
      } else {
        alert('리스트에서 지우는데 실패했습니다.');
      }
    });
  };

  const renderCards = Favorites.map((favorite, idx) => {
    const content = (
      <div>
        {favorite.moviePost ? (
          <img src={`${IMAGE_URL}w500${favorite.moviePost}`} alt="overview" />
        ) : (
          'no image'
        )}
      </div>
    );

    return (
      <tr key={idx}>
        <Popover content={content} title={`${favorite.movieTitle}`}>
          <td>{favorite.movieTitle}</td>
        </Popover>

        <td>{favorite.movieRunTime} mins</td>
        <td>
          <Button
            onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}
          >
            Remove
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: '85%', margin: '3rem auto' }}>
      <h2> Favorite Movies </h2>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie RunTime</th>
            <td>Remove from favorites</td>
          </tr>
        </thead>
        <tbody>{renderCards}</tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
