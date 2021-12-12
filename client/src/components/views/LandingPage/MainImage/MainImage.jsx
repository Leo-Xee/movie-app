import React from 'react';

export default function MainMovieImage(props) {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%), url('${props.image}') #1c1c1c`,
        height: '700px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          maxWidth: '500px',
          bottom: '2rem',
          marginLeft: '2rem',
        }}
      >
        <h2 style={{ color: 'white' }}>{props.title}</h2>
        <p style={{ color: 'white' }}>{props.desc}</p>
      </div>
    </div>
  );
}
