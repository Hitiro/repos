import React from 'react';

export default function Repositorio({ match }) {
  return (
    <h1 style={{ color: '#fff' }}>
      Repositorio <br />

      {decodeURIComponent(match.params.repositorio)}
    </h1>
  );
}