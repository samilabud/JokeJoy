export const fetchPaginateJokes = async (pageNumber, sortKey, sortOrder) => {
  const pageSize = 10;
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_OFFICIAL_JOKE_API
      : process.env.NEXT_PUBLIC_OFFICIAL_JOKE_API_DEV;

  const url = `${baseUrl}/jokes/paginate/?pageSize=${pageSize}&pageNumber=${pageNumber}&sortKey=${sortKey}&sortOrder=${sortOrder}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
