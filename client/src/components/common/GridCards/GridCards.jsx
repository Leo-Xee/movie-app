import { Col } from 'antd';
import React from 'react';

export default function GridCards(props) {
  if (props.LandingPage) {
    return (
      <Col lg={6} md={8} xs={12}>
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
  } else {
    return (
      <Col lg={6} md={8} xs={12}>
        <div>
          <img
            style={{
              width: '100%',
            }}
            src={props.image}
            alt={props.name}
          ></img>
        </div>
      </Col>
    );
  }
}
