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
  return (
    <Layout>
      <div className="inline-block w-8/12 mt-10">
        <h3 className="text-2xl font-bold text-amber-600 ml-3">
          All the Jokes
        </h3>
        <div id="jokes-container" className="flex flex-wrap">
          {data.map((joke) => (
            <div
              className="joke-block flex flex-col shadow-md shadow-black border-solid border-black border-2 m-3 p-3 rounded-md"
              key={joke.id}
            >
              <i className="text-sm self-end">@{joke.type}</i>
              <h4 className="">{joke.setup}</h4>
              <span>...{joke.punchline}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
