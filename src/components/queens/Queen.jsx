import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Queen = ({ name, image, quote, id }) => (
  <figure>
    <Link to={`/queen/${id}`}>
      <img src={image} alt={name} height="200px"/>
      <figcaption>
        <p>{name}</p>
        <p>&quot;{quote}&quot;</p>
      </figcaption>
    </Link>
  </figure>
);

Queen.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Queen;
