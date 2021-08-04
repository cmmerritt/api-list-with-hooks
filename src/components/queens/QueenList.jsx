import React from 'react';
import PropTypes from 'prop-types';
import Queen from './Queen';

const QueenList = ({ queens }) => {
  const queenElements = queens.map((queen) => (
    <li key={queen.id + queen.name}>
      <Queen 
        name={queen.name}
        image={queen.image_url}
        quote={queen.quote}
        id={queen.id}
      />
    </li>
  ));

  return <ul data-testid="ul">{queenElements}</ul>;
};

QueenList.propTypes = {
  queens: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })).isRequired
};

export default QueenList;
