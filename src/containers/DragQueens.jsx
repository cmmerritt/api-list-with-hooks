import React, { useEffect, useState } from 'react';
import QueenList from '../components/queens/QueenList';
import { fetchQueens } from '../services/dragRaceApi';

const DragQueens = () => {
  const [queens, setQueens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const queens = await fetchQueens();
    setQueens(queens);
    setLoading(false);
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return <QueenList queens={queens} />;
};

export default DragQueens;
