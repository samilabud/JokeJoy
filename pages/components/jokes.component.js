const Jokes = ({ title, jokes }) => (
  <div className="inline-block w-8/12 mt-10">
    <h3 className="text-2xl font-bold text-amber-600 ml-3">{title}</h3>
    <div id="jokes-container" className="flex flex-wrap">
      {jokes.map((joke) => (
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
  </div>
);

export default Jokes;
