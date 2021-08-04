import React, { useEffect, useState } from 'react';
import { fetchQueenById } from '../../services/dragRaceApi';


const QueenDetail = ({ props }) => {
  const [queen, setQueen] = useState([]);
  // const { id } = match.params;
  

  useEffect(() => {
    fetchQueenById(id)
      .then(res => setQueen(res));
  }, [id]);

  return (
    <>
      <h1>{queen.name}</h1>
      <img src={queen.image_url} alt={queen.name} height="400px" />
      <p><b>Words of Wisdom:</b> {queen.quote}</p>
    </>
  );
};

export default QueenDetail;
