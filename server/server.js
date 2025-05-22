const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = 3001;
const app = express();

// json file path
const json_file = path.join(__dirname, "../data/interactions.json");

// processing json files
app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("Server is working!");
});

// get route to fetch click interactions
// var data = fs.readFile('../data/interactions.json');
// var jsonData = JSON.parse(data);
// console.log(jsonData);

// TODO: adding individual GET routes for the interaction types to graph later

// get route to fetch hover interactions

// get route to fetch search interactions

// post route to send interactions (click, hover, maybe search) to the json file

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
