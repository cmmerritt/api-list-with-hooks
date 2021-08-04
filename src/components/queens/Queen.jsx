import React from 'react';
import PropTypes from 'prop-types';

const Queen = ({ name, image, quote }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{quote}</p>
    </figcaption>
  </figure>
);

Queen.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Queen;
