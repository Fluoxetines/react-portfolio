import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";
const App = () => {
  const containerRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <LocomotiveScrollProvider options={{ smooth: true }}>
      <main data-scroll-container ref={containerRef}>
        <AnimatePresence>{loading ? null : <Loader />}</AnimatePresence>
        <Hero />
        <div className="container">
          <About />
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
};

export default App;
