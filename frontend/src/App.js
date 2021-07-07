import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootswatch/dist/journal/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Footer />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
