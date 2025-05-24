import { useState, useEffect } from "react";
import { requestInteraction } from "../services/api";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// importing chart.js modules and functions to use
// set up useeffect hook to load in data from backend

function Barcharts() {
  const [interacts, setInteracts] = useState(null);
  const [error, setError] = useState(null);

  const [currBar, setCurrBar] = useState("clicks");

  useEffect(() => {
    const loadInteractions = async () => {
      try {
        const userInteractions = await requestInteraction();
        setInteracts(userInteractions);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Couldn't load in user interactions from backend");
      }
    };
    loadInteractions();
  }, []);

  // console.log(interacts)


  // make a barchart for each of the individual elkements
  // grabbing data for clicked elements
  let clickedLabels = [];
  let clickedCounts = [];

  if (interacts && interacts.userClicks) {
    clickedLabels = Object.keys(interacts.userClicks);
    clickedCounts = Object.values(interacts.userClicks);
  }

  const clickBar = {
    labels: clickedLabels,
    datasets: [
      {
        label: "Clicked Elements",
        data: clickedCounts,
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // grabbing data for hovered elements
  let hoverLabels = [];
  let hoverCounts = [];

  if (interacts && interacts.userHovers) {
    hoverLabels = Object.keys(interacts.userHovers);
    hoverCounts = Object.values(interacts.userHovers);
  }
  const hoverBar = {
    labels: hoverLabels,
    datasets: [
      {
        label: "Hovered Elements",
        data: hoverCounts,
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // grabbing data for search queries
  let searchLabels = [];
  let searchCounts = [];

  if (interacts && interacts.userSearches) {
    searchLabels = Object.keys(interacts.userSearches);
    searchCounts = Object.values(interacts.userSearches);
  }

  const searchBar = {
    labels: searchLabels,
    datasets: [
      {
        label: "Searched Elements",
        data: searchCounts,
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // make a conditional rendering func to render specific bar graph
  // click respective button to render respective bar graph
  // default the analytics to display clicked elements but change depending on button clicked
  // look into adding different colors per element
  // style buttons if time

  function handleBars() {
    if (currBar === "clicks") {
      return <Bar options={{ respnsive: true }} data={clickBar} />;
    }
    if (currBar === "hovers") {
      return <Bar options={{ respnsive: true }} data={hoverBar} />;
    }
    if (currBar === "searches") {
      return <Bar options={{ respnsive: true }} data={searchBar} />;
    }
  }

  return (
    <div>
      <div className="barcharts">
        <button onClick={() => setCurrBar("clicks")}>
          Clicked Elements Analytics
        </button>
        <button onClick={() => setCurrBar("hovers")}>
          Hovered Elements Analytics
        </button>
        <button onClick={() => setCurrBar("searches")}>
          Searched Queries Analytics
        </button>
      </div>

      {handleBars()}
    </div>
  );
}
export default Barcharts;
