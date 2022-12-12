import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Homepage from "./Components/GlobalPages/Homepage.js";
import CTM from "./Components/CTMPages/CTM.js";
import Investigator from "./Components/InvestigatorPages/Investigator.js";
import Contact from "./Components/GlobalPages/Contact.js";

function App() {
  const [currentPage, setCurrentPage] = useState("Homepage");

  if (currentPage === "Homepage") {
    return <Homepage setPage={setCurrentPage} />;
  }
  if (currentPage === "CTM") {
    return <CTM setPage={setCurrentPage} />;
  }
  if (currentPage === "INV") {
    return <Investigator setPage={setCurrentPage} />;
  }
  if (currentPage === "Contact") {
    return <Contact setPage={setCurrentPage} />;
  }
}

export default App;
