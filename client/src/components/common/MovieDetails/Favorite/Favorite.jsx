import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react';

export default function Favorite(props) {
  useEffect(() => {
    let variables = {
      userFrom: props.userId,
      movieId: props.movieId,
    };

    axios.post('/api/favoriteNumber', variables).then((res) => {
      if (res.data.success) {
      } else {
        alert('정보를 가져오는데 실패했습니다.');
      }
    });
  }, []);

  return (
    <div>
      <Button>Favorite</Button>
    </div>
  );
}
