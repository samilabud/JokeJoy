import { useState } from "react";
import { fetchRandomJokes } from "../../app/utils/fetch.jokes";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const Jokes = ({ title, jokes }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(jokes || []);
  const loadRandomJokes = async () => {
    setIsLoading(true);
    const res = await fetchRandomJokes();
    const newData = await res.json();
    setData(newData);
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
          </div>
        ))}
      </div>
      <div className="flex justify-end w-9/12">
        {isLoading ? (
          <CircularProgress sx={{ color: "#FF3F00" }} />
        ) : (
          <Button
            onClick={loadRandomJokes}
            variant="contained"
            sx={{ backgroundColor: "#FF3F00" }}
            className="hover:bg-orange-600"
          >
            Regenerate
          </Button>
        )}
      </div>
    </div>
  );
};

export default Jokes;
