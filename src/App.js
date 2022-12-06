import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Homepage from "./Components/Homepage.js";
import CTM from "./Components/CTM.js";
import Investigator from "./Components/Investigator.js";
import Contact from "./Components/Contact.js";

function App() {
  const [currentPage, setCurrentPage] = useState("CTM");

  if (currentPage === "Homepage") {
    return <Homepage setPage={setCurrentPage} />;
  }
  if (currentPage === "CTM") {
    return <CTM setPage={setCurrentPage} />;
  }
  if (currentPage === "Investigator") {
    return <Investigator setPage={setCurrentPage} />;
  }
  if (currentPage === "Contact") {
    return <Contact setPage={setCurrentPage} />;
  }
}

export default App;
