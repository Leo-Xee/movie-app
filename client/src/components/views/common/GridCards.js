import { Col } from 'antd';
import React from 'react';

export default function GridCards(props) {
  return (
    <Col lg={6} md={8} xs={24}>
      <div>
        <a href={`/movie/${props.movieId}`}>
          <img
            style={{
              width: '100%',
            }}
            src={props.image}
            alt={props.title}
          ></img>
        </a>
      </div>
    </Col>
  );
}
