import { AppProvider } from "./context/AppContext";
import Desktop from "./pages/Desktop";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <AppProvider>
      <Desktop />
      {/* <Navbar /> */}
    </AppProvider>
  );
}

export default App;
