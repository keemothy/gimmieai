import { useState, useEffect } from "react";
import { requestInteraction } from "../services/api";
import { Bar } from "react-chartjs-2";

import "../barcharts.css";

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

  // pedrotech generating colors guide for barcharts
  const generateColors = (count) => {
    return Array.from(
      { length: count },
      () => `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`
    );
  };

  // make a barchart for each of the individual elkements
  // grabbing data for clicked elements
  let clickedLabels = [];
  let clickedCounts = [];
  let colorsC = [];

  if (interacts && interacts.userClicks) {
    clickedLabels = Object.keys(interacts.userClicks);
    clickedCounts = Object.values(interacts.userClicks);
    colorsC = generateColors(clickedLabels.length);
  }

  const clickBar = {
    labels: clickedLabels,
    datasets: [
      {
        label: "Clicked Elements",
        data: clickedCounts,
        backgroundColor: colorsC,
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
      },
    ],
  };

  // grabbing data for hovered elements
  let hoverLabels = [];
  let hoverCounts = [];
  let colorsH = [];

  if (interacts && interacts.userHovers) {
    hoverLabels = Object.keys(interacts.userHovers);
    hoverCounts = Object.values(interacts.userHovers);
    colorsH = generateColors(hoverLabels.length);
  }
  const hoverBar = {
    labels: hoverLabels,
    datasets: [
      {
        label: "Hovered Elements",
        data: hoverCounts,
        backgroundColor: colorsH,
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
      },
    ],
  };

  // grabbing data for search queries
  let searchLabels = [];
  let searchCounts = [];
  let colorsS = [];

  if (interacts && interacts.userSearches) {
    searchLabels = Object.keys(interacts.userSearches);
    searchCounts = Object.values(interacts.userSearches);
    colorsS = generateColors(searchLabels.length);
  }

  const searchBar = {
    labels: searchLabels,
    datasets: [
      {
        label: "Searched Elements",
        data: searchCounts,
        backgroundColor: colorsS,
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
      },
    ],
  };

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: true};

  // look into chart.js notations for options to change chart properties like color and font
  const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "black",
        font: {
          weight: "bold",
          size: 20,
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: "black",
        font: {
          size: 14,
          weight: "bold",
        }
      }
    },
    y: {
      ticks: {
        color: "black",
        font: {
          size: 12,
        }
      }
    }
  }
};


  // make a conditional rendering func to render specific bar graph
  // click respective button to render respective bar graph
  // default the analytics to display clicked elements but change depending on button clicked
  // look into adding different colors per element
  // style buttons if time

  function handleBars() {
    if (currBar === "clicks") {
      return <Bar options={options} data={clickBar} />;
    }
    if (currBar === "hovers") {
      return <Bar options={options} data={hoverBar} />;
    }
    if (currBar === "searches") {
      return <Bar options={options} data={searchBar} />;
    }
  }

  return (
    <div>
      <div className="barcharts">
        <button onClick={() => setCurrBar("clicks")} className="btn btn-border-pop">
          Clicked Elements Analytics
        </button>
        <button onClick={() => setCurrBar("hovers")} className="btn btn-border-pop">
          Hovered Elements Analytics
        </button>
        <button onClick={() => setCurrBar("searches")} className="btn btn-border-pop">
          Searched Queries Analytics
        </button>
      </div>

      {handleBars()}
    </div>
  );
}
export default Barcharts;
