import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="loading"
      initial={{ y: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0.8 }}
      transition={{ duration: 1.5 }}
    >
      <div></div>
      <div></div>
      <div></div>
    </motion.div>
  );
};

export default Loader;
