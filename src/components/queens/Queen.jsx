import React from 'react';
import PropTypes from 'prop-types';

const Queen = ({ name, image, quote }) => (
  <figure>
    <img src={image} alt={name} height="200px"/>
    <figcaption>
      <p>{name}</p>
      <p>&quot;{quote}&quot;</p>
    </figcaption>
  </figure>
);

Queen.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Queen;
