import { Routes, Route } from "react-router-dom";

import { EventDetail } from "./page/EventDetail";
import { EventListing } from "./page/EventListing";

import "./styles.css";

export default function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<EventListing />} />
        <Route path="/:eventID" element={<EventDetail />} />
      </Routes>
    </div>
  );
}
