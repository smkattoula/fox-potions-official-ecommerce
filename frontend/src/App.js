import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootswatch/dist/journal/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Footer />
      </Router>
    </>
  );
}

export default App;
