import React, { useEffect, useState } from 'react';
import { fetchQueenById } from '../services/dragRaceApi';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const QueenDetail = ({ props }) => {
  const [queen, setQueen] = useState([]);
  const { id } = useParams();
  console.log(props);

  useEffect(() => {
    fetchQueenById(id)
      .then(res => setQueen(res));
  }, [id]);

  return (
    <>
      <h1>{queen.name}</h1>
      <img src={queen.image_url} alt={queen.name} height="400px" />
      <p><b>Words of Wisdom:</b> &quot;{queen.quote}&quot;</p>
    </>
  );
};

QueenDetail.propTypes = {
  props: PropTypes.any
};

export default QueenDetail;
