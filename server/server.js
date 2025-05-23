const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

// const PORT = 5000;
const PORT = 3001;
const app = express();

// data logs file path
const json_file = path.join(__dirname, "../data/interactions.json");

// processing json files
app.use(express.json());
app.use(cors());

// make a GET api call in api.js
// get route to send interactions to frontend for graphing
// sending information to /data endpoint
// loop thru individual elements inside of interactions.json
// initialize count at 0 for each element to avoid undefined behaviors
app.get("/api/data", (req, res) => {

    fs.readFile(json_file, "utf8", (err, data) => {
    if (err) {
      console.error("Couldn't read interaction.json", err);
      res.status(500);
      res.send("Error reading interaction.json");
      return;
    }

    const interactions = JSON.parse(data);

    const jsonData = {
      userClicks: {},
      userHovers: {},
      userSearches: {}
    };

    for (let i = 0; i < interactions.length; i++) {
      currElem = interactions[i];

      if (currElem.type === 'click') {
        jsonData.userClicks[currElem.elementId] = (jsonData.userClicks[currElem.elementId] || 0) + 1;
      }

      if (currElem.type === 'hover') {
        jsonData.userHovers[currElem.elementId] = (jsonData.userHovers[currElem.elementId] || 0) + 1;
      }

      if (currElem.type === 'search') {
        jsonData.userSearches[currElem.elementId] = (jsonData.userSearches[currElem.elementId] || 0) + 1;
      }
    }
    res.json(jsonData)
  });
});

// TODOO: connect post req to func in api.js
// post route to send interactions (click, hover, search) to the json file
// have to read the file in before appending new data
// check for errors before writing new data into interactions
app.post("/api/interactions", (req, res) => {
  const newInteraction = req.body;

  fs.readFile(json_file, "utf8", (err, data) => {
    if (err) {
      console.error("Couldn't read interaction.json", err);
      res.status(500);
      res.send("Error reading interaction.json");
      return;
    }

    const interactions = data ? JSON.parse(data) : [];
    interactions.push(newInteraction);
    jsonData = JSON.stringify(interactions, null, 2);

    fs.writeFile(json_file, jsonData, (err) => {
      if (err) {
        console.error("Couldn't write new interaction", err);
        res.status(500);
        res.send("Error writing to interaction.json");
        return;
      }

      res.status(201).send("New interaction written");
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
