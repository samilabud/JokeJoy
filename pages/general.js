import Layout from "./components/layout";
import Jokes from "./components/jokes.component";
import { fetchPaginateJokes } from "./utils/fetch.jokes";

export async function getServerSideProps({ query }) {
  const initialPageNumber = 1;

  const { sortKey = "id", sortOrder = "asc" } = query;

  const res = await fetchPaginateJokes(
    initialPageNumber,
    sortKey,
    sortOrder,
    "general"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data for general jokes");
  }

  const data = await res.json();
  return { props: { data, sortKey, sortOrder } };
}

export default function HomePage({ data, sortKey, sortOrder }) {
  return (
    <Layout>
      <Jokes
        title="General jokes"
        jokes={data}
        sortKey={sortKey}
        sortOrder={sortOrder}
        type="general"
      />
    </Layout>
  );
}
