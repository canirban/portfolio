import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import ReactGA4 from "react-ga4";

function App() {
  useEffect(() => {
    console.log(
      "%c You sneaky developer, nothing in here though! ",
      "background: #222; color: #bada55"
    );
  });
  useEffect(() => {
    ReactGA4.initialize("G-YH86YG70L7");
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
