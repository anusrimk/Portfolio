import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [activeApp, setActiveApp] = useState(null);

  const openApp = (appName) => {
    setActiveApp(appName);
  };

  const closeApp = () => {
    setActiveApp(null);
  };

  return (
    <AppContext.Provider value={{ activeApp, openApp, closeApp }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
