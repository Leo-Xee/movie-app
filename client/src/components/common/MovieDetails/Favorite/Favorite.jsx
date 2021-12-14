import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Favorite(props) {
  const [FavoriteNumber, setFavoritedNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);

  let variables = {
    userFrom: props.userId,
    movieId: props.movieId,
    movieTitle: props.movieInfo.title,
    moviePost: props.movieInfo.backdrop_path,
    movieRunTime: props.movieInfo.runtime,
  };

  useEffect(() => {
    axios.post('/api/favorite/favoriteNumber', variables).then((res) => {
      if (res.data.success) {
        setFavoritedNumber(res.data.favoriteNumber);
      } else {
        alert('정보를 가져오는데 실패했습니다.');
      }
    });

    axios.post('/api/favorite/favorited', variables).then((res) => {
      if (res.data.success) {
        setFavorited(res.data.favorited);
      } else {
        alert('정보를 가져오는데 실패했습니다.');
      }
    });
  }, []);

  const onClickFavorite = () => {
    if (Favorited) {
      axios.post('/api/favorite/removeFromFavorites', variables).then((res) => {
        if (res.data.success) {
          console.log(res.data);
          setFavoritedNumber(Favorited - 1);
          setFavorited(!Favorited);
        } else {
          alert('Favorite 리스트에서 지우는 것을 실패했습니다.');
        }
      });
    } else {
      axios.post('/api/favorite/addToFavorite', variables).then((res) => {
        if (res.data.success) {
          console.log(res.data);
          setFavoritedNumber(Favorited + 1);
          setFavorited(!Favorited);
        } else {
          alert('Favorite 리스트에 추가하는 것을 실패했습니다.');
        }
      });
    }
  };

  return (
    <div>
      <Button onClick={onClickFavorite}>
        {Favorited ? 'Not Favorite' : 'Add to Favorite'} {FavoriteNumber}
      </Button>
    </div>
  );
}
