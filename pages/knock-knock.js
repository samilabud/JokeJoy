import Layout from "./components/layout";
import Jokes from "./components/jokes.component";
import { fetchPaginateJokes } from "../app/utils/fetch.jokes";

export async function getServerSideProps() {
  const initialPageNumber = 1;
  const sortKey = "id";
  const sortOrder = "asc";

  const res = await fetchPaginateJokes(
    initialPageNumber,
    sortKey,
    sortOrder,
    "knock-knock"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data for knock-knock jokes");
  }

  const data = await res.json();
  return { props: { data } };
}

export default function HomePage({ data, sortKey, sortOrder }) {
  return (
    <Layout>
      <Jokes
        title="Knock Knock jokes"
        jokes={data}
        sortKey={sortKey}
        sortOrder={sortOrder}
        type="knock-knock"
      />
    </Layout>
  );
}
