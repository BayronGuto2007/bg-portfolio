//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar2 } from "./components/Nabvar";
import { Banner2 } from "./components/Banner";
import { Skills2 } from "./components/Skills";
import { Projects2 } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar2/>
      <Banner2/>
      <Skills2/>
      <Projects2/>
      <Footer/>
    </div>
  );
}

export default App;
