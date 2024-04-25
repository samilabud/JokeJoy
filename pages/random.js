import Layout from "./components/layout";
import RandomJokes from "./components/random.jokes.component";
import { fetchRandomJokes } from "../app/utils/fetch.jokes";

export async function getServerSideProps() {
  const res = await fetchRandomJokes();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data for latest joke");
  }

  const data = await res.json();
  return { props: { data } };
}

export default function HomePage({ data }) {
  return (
    <Layout>
      <RandomJokes title="Random jokes" jokes={data} />
    </Layout>
  );
}
