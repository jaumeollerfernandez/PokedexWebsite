import React, { useState } from "react";
import { motion } from "framer-motion";
import "./pokemodal.css";

export function PokeModal(props) {
  const handleClose = props.handleClose;
  const BackgroundColor = props.color;
  const PokemonName = props.name;
  const [Description, setDescription] = useState("");
  console.log('llega a pokemodal la url de la imagen ')
  console.log(props.imageURL)


  const fetchData = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon-species/" + PokemonName + "/"
    );
    const data = await response.json();
    console.log(data)
    setDescription(data.flavor_text_entries[8].flavor_text)
  };

  fetchData();

  console.log(BackgroundColor);
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
          <div className="content" style={{ backgroundColor: props.color }}>
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <img className="modal-image" src={props.imageURL} alt="" srcset="" />
                    <div className="modal-name-title">{PokemonName}</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col text-center m-4">
                    <div className="modal-description">{Description}</div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleClose}>Exit</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
