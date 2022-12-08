import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Container from "react-bootstrap/Container";
import NavBarWelcome from "./Components/NavBarWelcome.js";
import Homepage from "./Components/Homepage.js";
import CTM from "./Components/CTM.js";
import Investigator from "./Components/Investigator.js";
import Contact from "./Components/Contact.js";

function App() {
  const [currentPage, setCurrentPage] = useState("Homepage");

  if (currentPage === "Homepage") {
    return <Homepage setPage={setCurrentPage} />;
  }
  if (currentPage === "CTM") {
    return (
      <Container>
        <NavBarWelcome setPage={setCurrentPage} />
        <CTM setPage={setCurrentPage} />
      </Container>
    );
  }
  if (currentPage === "INV") {
    return (
      <Container>
        <NavBarWelcome setPage={setCurrentPage} />
        <Investigator setPage={setCurrentPage} />{" "}
      </Container>
    );
  }
  if (currentPage === "Contact") {
    return <Contact setPage={setCurrentPage} />;
  }
}

export default App;
