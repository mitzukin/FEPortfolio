// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Layout from "./layouts/Layout";
import "./index.css";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <Router basename="/FEPortfolio">
      <Routes>
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/work"
          element={
            <Layout>
              <Work />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
