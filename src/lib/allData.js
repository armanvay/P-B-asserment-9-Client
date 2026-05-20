export const getData = async (search = "", category = "") => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (category) params.append("category", category);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/ideas?${params.toString()}`,
  );

  return res.json();
};

export const gettendingData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/tending`);
  const idea = await res.json();
  return idea;
};

export const getDetails = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/ideas/${id}`);
  const result = await res.json();
  return result;
};

// My ideas (logged-in user)
export const getMyIdeas = async (email) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/my-ideas/${email}`);
  const data = await res.json();
  return data;
};
