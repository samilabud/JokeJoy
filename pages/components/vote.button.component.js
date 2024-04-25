import { useState, useRef } from "react";
import { voteForJoke } from "../utils/fetch.jokes";
import IconButton from "@mui/material/IconButton";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

const VoteButton = ({ jokeId, votes }) => {
  const [numOfVotes, setNumOfVotes] = useState(votes || 0);
  const [voteDisabled, setVoteDisable] = useState(false);
  const voteUp = async (jokeId) => {
    const res = await voteForJoke(jokeId);
    setVoteDisable(true);
    const votes = await res.json();
    setNumOfVotes(votes);
  };

  return (
    <div id="vote">
      <IconButton
        aria-label="vote"
        onClick={() => voteUp(jokeId)}
        disabled={voteDisabled}
      >
        <SentimentSatisfiedAltOutlinedIcon />
      </IconButton>
      <span className="text-sm self-end">votes:{numOfVotes}</span>
    </div>
  );
};

export default VoteButton;
