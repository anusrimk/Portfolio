import { useAppContext } from "../context/AppContext";
import About from "../sections/About";
import Landing from "../components/Landing";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Tech from "../sections/Tech";

function Modal() {
  const { activeApp, closeApp } = useAppContext();

  if (!activeApp) return null; // Don't render anything if no app is open

  return (
    <div className="w-full h-full bg-background shadow-lg rounded-md">
      {/* Header */}
      {/* <div className="modal-header flex justify-between items-center bg-gray-300 p-2">
        <h2 className="text-lg font-bold">{activeApp}</h2>
        <button className="text-red-500 font-bold" onClick={closeApp}>
          X
        </button>
      </div> */}

      {/* Dynamically render the active app component */}
      <div className="w-full h-full">
        {activeApp === "About" && <About />}
        {activeApp === "Me" && <Landing />}
        {activeApp === "Projects" && <Projects />}
        {activeApp === "Contact Me" && <Contact />}
        {activeApp === "Tech" && <Tech />}
        {/* {activeApp === "App2" && <App2 />} */}
        {/* Add more app components as needed */}
      </div>
    </div>
  );
}

export default Modal;
