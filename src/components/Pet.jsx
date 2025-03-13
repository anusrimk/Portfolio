import React from "react";
import { animatedPets } from "../constants/stuff";

function Pet({ number }) {
  return (
    <div className="w-full h-[20%] flex justify-center items-center">
      <img src={animatedPets[number]} alt="" className="w-36 h-32" />
    </div>
  );
}

export default Pet;
