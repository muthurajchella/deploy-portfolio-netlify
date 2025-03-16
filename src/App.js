import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Navbar = React.lazy(() => import("./components/Navbar"));
const Themes = React.lazy(() => import("./components/Theme"));
const Home = React.lazy(() => import("./Pages/home/Home"));
const About = React.lazy(() => import("./Pages/about/About"));
const Portfolio = React.lazy(() => import("./Pages/portfolio/Portfolio"));
const Contact = React.lazy(() => import("./Pages/contact/Contact"));

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<h1> </h1>}>
          <Navbar />
          <Themes />
        </Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<h1> </h1>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<h1> </h1>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Suspense fallback={<h1> </h1>}>
                <Portfolio />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<h1> </h1>}>
                <Contact />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
