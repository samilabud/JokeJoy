import { useState, useRef } from "react";
import { fetchPaginateJokes } from "../../app/utils/fetch.jokes";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import VoteButton from "./vote.button.component";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Jokes = ({ title, jokes, showLoadMoreButton = true, type = "all" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("asc");
  const [showLoadMore, setShowLoadMore] = useState(showLoadMoreButton);
  const [data, setData] = useState(jokes || []);
  const page = useRef(1);

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };
  const handleOrderByChange = (event) => {
    setOrderBy(event.target.value);
  };
  const applyFilter = (e) => {
    e.preventDefault();
    loadMoreData(true);
  };

  const loadMoreData = async (reset = false) => {
    setIsLoading(true);
    if (reset) {
      page.current = 0;
    }
    const newPage = page.current + 1;
    const res = await fetchPaginateJokes(newPage, sortBy, orderBy, type);
    const newData = await res.json();
    if (newData.length <= 0) {
      setShowLoadMore(false);
    }
    if (reset) {
      setData(newData);
    } else {
      setData([...data, ...newData]);
    }
    page.current = newPage;
    setIsLoading(false);
  };

  return (
    <div className="inline-block w-full mt-10">
      <div className="flex w-full justify-between mb-3">
        <h3 className="text-2xl font-bold text-amber-600 ml-3">{title}</h3>
        <div className="flex justify-end lg:justify-between items-end h-32 xl:h-0 flex-column lg:flex-row w-6/12 lg:w-5/12 flex-wrap pr-4 min-w-44">
          <div>
            <span id="sortByLabel" className="cursor-pointer font-semibold">
              Sort by:
            </span>
            <Select
              labelId="sortByLabel"
              value={sortBy}
              onChange={handleSortByChange}
              className="h-10 text-amber-600"
            >
              <MenuItem value="id">ID</MenuItem>
              <MenuItem value="type">Type</MenuItem>
              <MenuItem value="setup">Setup</MenuItem>
              <MenuItem value="punchline">Punchline</MenuItem>
            </Select>
          </div>
          <div>
            <span id="orderByLabel" className="cursor-pointer font-semibold">
              Order by:
            </span>
            <Select
              labelId="orderByLabel"
              value={orderBy}
              onChange={handleOrderByChange}
              className="h-10 text-amber-600"
            >
              <MenuItem value="asc">ASC</MenuItem>
              <MenuItem value="desc">DESC</MenuItem>
            </Select>
          </div>
          <Button
            onClick={applyFilter}
            variant="contained"
            className="bg-amber-600 hover:bg-amber-700 h-10"
          >
            Apply
          </Button>
        </div>
      </div>
      <div
        id="jokes-container"
        className="flex flex-wrap justify-center xl:justify-start"
      >
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
        <div className="flex justify-start m-3">
          {isLoading ? (
            <CircularProgress sx={{ color: "#FF3F00" }} />
          ) : (
            <Button
              onClick={() => loadMoreData()}
              variant="contained"
              className="bg-amber-600 hover:bg-amber-700"
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
