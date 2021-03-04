import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import SideButton from "./components/sideButtons/sideButtons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideButton />
      <LandingPage />
    </div>
  );
}

export default App;
