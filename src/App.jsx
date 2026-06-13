import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { Link } from "react-router";
import { BrowserRouter } from "react-router";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
    </>
  );
}

export default App;
