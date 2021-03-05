import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import SideButton from "./components/sideButtons/sideButtons";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Project from "./components/Projects/projects";
import Blog from "./components/Blog/Blog";
import OtherProject from "./components/OtherProjects/OtherProjects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideButton />
      <LandingPage />
      <About />
      <Project />
      <OtherProject />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
