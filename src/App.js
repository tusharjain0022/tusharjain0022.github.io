import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import SideButton from "./components/sideButtons/sideButtons";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideButton />
      <LandingPage />
      <About />
      <Footer />
    </div>
  );
}

export default App;
