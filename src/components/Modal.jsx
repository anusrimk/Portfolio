import { useAppContext } from "../context/AppContext";
import About from "../sections/About";
import Landing from "../components/Landing";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Tech from "../sections/Tech";

function Modal() {
  const { activeApp, closeApp } = useAppContext();

  if (!activeApp) return null;

  return (
    <div className="w-full h-full bg-background shadow-lg rounded-md">

      {/* Dynamically render the active app component */}
      <div className="w-full h-full">
        {activeApp === "About" && <About />}
        {activeApp === "Me" && <Landing />}
        {activeApp === "Projects" && <Projects />}
        {activeApp === "Contact" && <Contact />}
        {activeApp === "Tech" && <Tech />}
        {/* {activeApp === "App2" && <App2 />} */}
        {/* Add more app components as needed */}
      </div>
    </div>
  );
}

export default Modal;
