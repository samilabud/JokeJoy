import { useState, useRef } from "react";
import { fetchPaginateJokes } from "../utils/fetch.jokes";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import VoteButton from "./vote.button.component";

const Jokes = ({
  title,
  jokes,
  sortKey,
  sortOrder,
  showLoadMoreButton = true,
  type = "all",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(showLoadMoreButton);
  const [data, setData] = useState(jokes);
  const page = useRef(1);

  const loadMoreData = async () => {
    setIsLoading(true);
    const newPage = page.current + 1;
    const res = await fetchPaginateJokes(newPage, sortKey, sortOrder, type);
    const newData = await res.json();
    if (newData.length <= 0) {
      setShowLoadMore(false);
    }
    setData([...data, ...newData]);
    page.current = newPage;
    setIsLoading(false);
  };

  return (
    <div className="inline-block w-8/12 mt-10">
      <h3 className="text-2xl font-bold text-amber-600 ml-3">{title}</h3>
      <div id="jokes-container" className="flex flex-wrap">
        {data.map((joke) => (
          <div
            className="joke-block flex flex-col shadow-md shadow-black border-solid border-black border-2 m-3 p-3 rounded-md max-w-72 min-w-56"
            key={joke.id}
          >
            <i className="text-sm self-end">@{joke.type}</i>
            <h4 className="text-lg font-medium">{joke.setup}</h4>
            <span className="text-lg">...{joke.punchline}</span>
            <VoteButton jokeId={joke.id} votes={joke.votes} />
          </div>
        ))}
      </div>
      {showLoadMore ? (
        <div className="flex justify-end w-9/12">
          {isLoading ? (
            <CircularProgress sx={{ color: "#FF3F00" }} />
          ) : (
            <Button
              onClick={loadMoreData}
              variant="contained"
              sx={{ backgroundColor: "#FF3F00" }}
              className="hover:bg-orange-600"
            >
              Load More
            </Button>
          )}
        </div>
      ) : (
        <div className="flex justify-end w-9/12">
          <span style={{ color: "#FF3F00" }}>No more jokes</span>
        </div>
      )}
    </div>
  );
};

export default Jokes;
