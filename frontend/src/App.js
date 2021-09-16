import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <HomeScreen />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
