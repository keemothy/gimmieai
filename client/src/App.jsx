import Navbar from "./components/navbar";

import Interactions from "./components/interactions";
import Analytics from "./pages/analytics";
import StaffPicks from "./pages/staffpicks";

import { Routes, Route } from "react-router-dom";

// page structure for project;
// App --> holds the navigation bar/page routing logic
// --> interactions --> default home page when user clicks either gimmie logo or home menu
// --> staffpicks --> option to go to a diff page if user wants to check out the latest top picks
// --> analytics --> option to go to the bar chart displays for user interactions (clicks, hovers, searches)

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Interactions />} />
          <Route path="/staff-picks" element={<StaffPicks />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
