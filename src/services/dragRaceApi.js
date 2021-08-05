export const fetchQueens = async () => {
  const res = await fetch('https://www.nokeynoshade.party/api/queens?limit=10');
  const json = await res.json();
  return json;
};

export const fetchQueenById = async (id) => {
  const res = await fetch(`https://www.nokeynoshade.party/api/queens/${id}`);
  const json = await res.json();
  return json;
};
