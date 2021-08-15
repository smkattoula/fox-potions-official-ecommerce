import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootswatch/dist/journal/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Footer />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/productdetails/:id" component={ProductDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
