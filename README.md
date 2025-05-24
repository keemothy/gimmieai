Round 2 Technical Project

# 📊 Data Interaction and Visualization

## Overview
This project captures and processes user interactions (clicks, hovers, etc.) using React and visualizes the interaction data via a simple API and chart interface.

## Tech Stack
- React.js
- Node.js + Express
- Charting Library (Chart.js)
- JSON file (local database)

## Features
- Captures user clicks, hovers, and searches on UI elements
- Stores interaction data locally in a JSON file
- Node.js API to retrieve and process interaction metrics
- Bar chart visualization showing interaction counts per element
- Modular, reusable components
- Basic styling for clean presentation

## Installation

```bash
git clone https://github.com/keemothy/gimmieai.git
cd gimmieai
npm install
```

## Running the App

### Start the backend:
```bash
cd server
npm install
node server.js OR npm start
```

### Start the frontend:
```bash
cd client
npm install
npm run dev OR npm start
```

## Additional Packages installed if needed
For the frontend:
```bash
cd client
npm install chart.js
npm install react-chartjs-2
npm install react-router-dom 
```
For the backend:
```bash
cd server
npm install express
```

## Folder Structure

```
root/
├── client/                   # React frontend
│   └── src/
│       └── components/       # React components
│       └── pages/            # Navigation Pages
│       └── services/         # API Handler
├── server/                   # Node.js backend
│   └── server.js
├── data/                     # Interaction logs
│   └── interactions.json
└── README.md
```

## Walkthrough Video
📽️ [Link to Code Structure Walkthrough](https://youtu.be/vfZbWQSn51o) > Code, Design Architecture, Implementation ONLY

📽️ [Link to Project Website Demo](https://youtu.be/d66cFdZIcak) > Website Demo ONLY
