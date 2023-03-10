import { useState } from "react";
import "./pokemon.css";
import { motion } from "framer-motion";
import { PokeModal } from "./modal/pokemodal";
import { useEffect } from "react";

export function Pokemon(props) {
  const BrokenImage = (ev) => {
    ev.target.src = "./assets/default.png";
  };

  const BrokenBadge = (ev) => {
    ev.target.src = "./assets/badges/notfound.png";
  };
  const [modalOpen, setmodalOpen] = useState(false);
  const close = () => setmodalOpen(false);
  const open = () => setmodalOpen(true);

  useEffect(() => {
    console.log("useEffect desde Pokemon");
  }, []);

  return (
    <>
      {modalOpen && (
        <PokeModal
          handleClose={close}
          color={props.color}
          name={props.name}
          imageURL={props.image}
          BadgeType={props.BadgeType}
          BadgeType2={props.BadgeType2}
        />
      )}
      <motion.div
        onClick={open}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="m-2 card"
        // onClick={modalOpen ? close : open}
        style={{ backgroundColor: props.color }}
      >
        <img
          className="card-img-top"
          onError={BrokenImage}
          src={props.image}
          alt={props.name}
        />
        <div className="card-body text-center">
          <h2 className="PokemonName">{props.name}</h2>
        </div>

        <div className="card-text">
          <div className="col text-center">
            <img
              className="py-2 px-1"
              src={props.BadgeType}
              onError={BrokenBadge}
              width={70}
              alt=""
              srcset=""
            />
            {props.lengthType === 2 ? (
              <img
                className="py-2 px-1"
                src={props.BadgeType2}
                onError={BrokenBadge}
                width={70}
                alt=""
                srcset=""
              />
            ) : null}
          </div>
        </div>
      </motion.div>
      {/* {modalOpen && <PokeModal handleClose={close} />} */}
    </>
  );
}
