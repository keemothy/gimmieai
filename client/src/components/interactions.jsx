import { useState, useRef } from "react";

import { sendInteraction } from "../services/api";

function Interactions() {
  const [clicks, setClicks] = useState(0);
  const [hovers, setHovers] = useState(0);
  // const [searches, setSearches] = useState(0);

  // handling clicks and sending to backend
  function handleClick() {
    setClicks(clicks + 1);
    sendInteraction("click", "next-button");
  }

  // handling hovers and sending to backend
  function handleHover() {
    setHover(hovers + 1);
    sendInteraction("hover", "hovered-element");
  }

  // handling search queries and sending to backend

  return (
    // Handle hovering interactions

    // Handle searching interactions

    // TODO: handle the search, hover, and maybe add a timestamp to some of these interactions? 
    // also try to work on some sample data to test the interactions like a image for a product to see if user hovers over it or to see if user clicks on it
    // maybe also try adding a search bar to see if user queries for something <-- concept model rather than integration of real data? <-- just wanna log these things

    <div>
      {/* clicking interactions */}
      <button onClick={handleClick}> Click here please</button>
      <h2> You've clicked the button {clicks} times</h2>
    </div>
  );
}

export default Interactions;
