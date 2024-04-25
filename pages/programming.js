import Layout from "./components/layout";
import Jokes from "./components/jokes.component";
import { fetchPaginateJokes } from "./utils/fetch.jokes";

export async function getServerSideProps() {
  const initialPageNumber = 1;

  const sortKey = "id";
  const sortOrder = "asc";

  const res = await fetchPaginateJokes(
    initialPageNumber,
    sortKey,
    sortOrder,
    "programming"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data for general jokes");
  }

  const data = await res.json();
  return { props: { data } };
}

export default function HomePage({ data }) {
  return (
    <Layout>
      <Jokes title="Programming jokes" jokes={data} type="programming" />
    </Layout>
  );
}
