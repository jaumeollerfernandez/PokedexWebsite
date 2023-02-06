import React from "react";
import { motion } from "framer-motion";
import "./pokemodal.css";

export function PokeModal(props) {
  const handleClose = props.handleClose;
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <motion.div
      className="backdrop"
      variants={backdrop}
      initial="hidden"
      animate="visible"
    >
      <div className="row">
        <div className="col text-center">
          <div className="content">
            <p>Esto es una frase</p>
            <button onClick={handleClose}>Exit</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
