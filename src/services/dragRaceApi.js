export const fetchQueens = async () => {
  const res = await fetch('http://www.nokeynoshade.party/api/queens/all');
  const json = await res.json();
  return json;
};

export const fetchQueenById = async (id) => {
  const res = await fetch(`http://www.nokeynoshade.party/api/queens/${id}`);
  const json = await res.json();
  return json;
};
