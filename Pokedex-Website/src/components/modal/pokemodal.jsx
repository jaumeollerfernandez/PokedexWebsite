import "./pokemodal.css";
import { motion } from "framer-motion";
import { BackDrop } from "./backdrop";
import { useState } from "react";

function PokeModal(props) {
  const [text, setText] = useState('')
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration:0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      }
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <BackDrop onClick={props.handleClose}>
      <motion.div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <button onClick={handleClose}></button>
      </motion.div>
    </BackDrop>
  );
}

export default PokeModal;
