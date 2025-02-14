import { useAppContext } from "../context/AppContext";

function Navbar() {
  const { activeApp } = useAppContext();

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white flex p-2">
      {activeApp && <div className="px-4">{activeApp ? activeApp : <></>}</div>}
    </div>
  );
}

export default Navbar;
