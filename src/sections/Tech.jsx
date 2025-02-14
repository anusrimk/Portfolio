import React from "react";
import { fileImg, techIcons, animatedPets } from "../constants/stuff";

function Tech() {
  return (
    <section className="w-full h-[full] p-12 flex flex-wrap gap-4 justify-center items-center relative">
      {techIcons.map((icon, index) => (
        <div
          key={index}
          className="relative w-32 h-32 flex justify-center items-center active:ring-4 active:ring-text-lightest"
        >
          <img src={fileImg} className="w-28 h-28 opacity-50" />
          <img
            src={icon}
            alt={`Tech icon ${index + 1}`}
            className="absolute top-10 left-[18px] w-16 h-16 object-contain"
          />
        </div>
      ))}

      <div className="absolute bottom-[-160px] left-12 w-36 h-36">
        <img src={animatedPets[4]} alt="" />
      </div>
    </section>
  );
}

export default Tech;
