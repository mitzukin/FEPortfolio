import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Layout from "./layouts/Layout";
import "./index.css";
import Contact from "./pages/Contact";
import ScrollToTop from "./Utils/ScrollToTop";
import Loader from "./Utils/Loader";
import NotFound from "./components/NotFound";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Router>
          <Routes>
            <Route
              path="/about"
              element={
                <>
                  <ScrollToTop />
                  <Layout>
                    <About />
                  </Layout>
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <ScrollToTop />
                  <Layout>
                    <Contact />
                  </Layout>
                </>
              }
            />
            <Route
              path="/work"
              element={
                <>
                  <ScrollToTop />
                  <Layout>
                    <Work />
                  </Layout>
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <ScrollToTop />
                  <Layout>
                    <Home />
                  </Layout>
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
