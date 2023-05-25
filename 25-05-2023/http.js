const API_URL = "https://dummyjson.com/docs";

export const POST = async (endpoint, body) => {
  const res = await fetch(API_URL + endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: "Use DummyJSON in the project",
      completed: false,
      userId: 5,
    }),
  });
  const data = await res.json();

  return data;
};

export const DELETE = async (endpoint) => {
  const res = await fetch(API_URL + endpoint, {
    method: "DELETE",
  });
  const data = await res.json();

  return data;
};
