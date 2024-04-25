export const fetchPaginateJokes = async (
  pageNumber,
  sortKey,
  sortOrder,
  type = "all"
) => {
  const pageSize = 10;
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_OFFICIAL_JOKE_API
      : process.env.NEXT_PUBLIC_OFFICIAL_JOKE_API_DEV;

  const url = `${baseUrl}/jokes/paginate/?pageSize=${pageSize}&pageNumber=${pageNumber}&sortKey=${sortKey}&sortOrder=${sortOrder}&type=${type}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const fetchRandomJokes = async () => {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_OFFICIAL_JOKE_API
      : process.env.NEXT_PUBLIC_OFFICIAL_JOKE_API_DEV;

  const url = `${baseUrl}/jokes/ten/`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
