import React, { useState, useEffect } from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { createHashHistory } from 'history';

import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Layout from "./layouts/Layout";
import "./index.css";
import Contact from "./pages/Contact";
import ScrollToTop from "./Utils/ScrollToTop";
import Loader from "./Utils/Loader";
import NotFound from "./components/NotFound";

const hashHistory = createHashHistory({ hashType: "/" });

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  const connectionType =
    navigator.connection && navigator.connection.effectiveType;

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Router history={hashHistory}>
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
