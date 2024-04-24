import Layout from "../app/components/layout";

export async function getServerSideProps({ query }) {
  console.log({ query });
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_OFFICIAL_JOKE_API
      : process.env.NEXT_PUBLIC_OFFICIAL_JOKE_API_DEV;
  const url = `${baseUrl}/jokes/paginate/?pageSize=10&pageNumber=1&sortKey=id&sortOrder=asc`;
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
  // console.log(data);
  return (
    <Layout>
      <div id="jokes-container" className="">
        <div>
          <h3 className="text-2xl font-bold">Jokes</h3>
        </div>
      </div>
    </Layout>
  );
}
