import React from "react";
import { range } from "../../utils.js";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function GuessResults({ guesses, answer }) {
  // const guessSlots = range(0, 6, 1);

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
          return <Guess key={num} value={guesses[num]} answer={answer} />;
        })}
      </div>
    </>
  );
}

export default GuessResults;
