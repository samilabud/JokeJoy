import Layout from "./components/layout";
import Jokes from "./components/jokes.component";

export async function getServerSideProps({ query }) {
  const { pageSize, pageNumber, sortKey = "id", sortOrder = "asc" } = query;

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

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return { props: { data } };
}

export default function HomePage({ data }) {
  return (
    <Layout>
      <Jokes title="All the jokes" jokes={data} />
    </Layout>
  );
}
