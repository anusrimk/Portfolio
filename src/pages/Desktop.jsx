import { animatedPets, icons } from "../constants/stuff";
import { useAppContext } from "../context/AppContext";
import Modal from "../components/Modal";
import Landing from "../components/Landing";

function Desktop() {
  const { activeApp, openApp } = useAppContext();

  return (
    <section className="w-full h-screen background relative flex items-start py-40 px-12">
      {/* Sidebar Icons */}
      <div className="flex flex-col gap-4 w-20 h-92">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="flex flex-col items-center text-center text-md/normal cursor-pointer"
            onDoubleClick={() => openApp(icon.name)}
          >
            <img
              src={icon.icon}
              alt={icon.name}
              className="active:ring-2 active:ring-white active:ring-offset-2 active:ring-offset-text-lighter"
            />
            <h4 className="font-pixel text-[1.5rem] text-[oklch(0.359 0.144 278.697)]">{icon.name}</h4>
          </div>
        ))}
      </div>

      <div className="w-[1000px] h-[600px] bg-white absolute top-32 left-60 z-10 border-4 border-text-light flex flex-col overflow-hidden">
        <div
          className="w-full h-12 bg-[#FFE5EC] flex items-center pl-6 overflow-hidden border-b-4 border-text-light
        "
        >
          <h5 className="font-pixel text-2xl">
            {activeApp ? activeApp : "My Portfolio"}
          </h5>
        </div>
        {/* Single Modal for all apps */}
        {activeApp ? <Modal /> : <Landing />}
      </div>

      <div className="absolute top-8 right-32 w-72 h-52 z-30">
        <img src={animatedPets[3]} alt="" className="w-full h-full" />
      </div>

      <div className="absolute top-12 right-60 w-48 h-32 z-20">
        <img src={animatedPets[3]} alt="" className="w-full h-full" />
      </div>

      <div className="absolute bottom-4 right-4 w-52 h-52">
        <img src={animatedPets[2]} alt="" className="w-full h-full" />
      </div>
    </section>
  );
}

export default Desktop;
