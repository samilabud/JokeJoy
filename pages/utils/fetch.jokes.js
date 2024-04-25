const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_OFFICIAL_JOKE_API
    : process.env.NEXT_PUBLIC_OFFICIAL_JOKE_API_DEV;

export const fetchPaginateJokes = async (
  pageNumber,
  sortKey,
  sortOrder,
  type = "all"
) => {
  const pageSize = 10;

  const url = `${BASE_URL}/jokes/paginate/?pageSize=${pageSize}&pageNumber=${pageNumber}&sortKey=${sortKey}&sortOrder=${sortOrder}&type=${type}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const fetchRandomJokes = async () => {
  const url = `${BASE_URL}/jokes/ten/`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const voteForJoke = async (id) => {
  const url = `${BASE_URL}/jokes/${id}/vote/`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
