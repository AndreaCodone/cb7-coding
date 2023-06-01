const API_URL = "https://dummyjson.com";

export const GET = async (endpoint) => {
  const res = await fetch(`${API_URL}${endpoint}`);
  const data = await res.json();

  return data;
};
