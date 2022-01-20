import Home from "./modules/homepage/Home";
import Navbar from "./modules/navbar/Navbar";
import About from "./modules/aboutme/About"
import "./App.css"
import "./font.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Skills from "./modules/skills/Skills";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/skills" element={<Skills/>}/>
          </Routes>
      </Router>
        
    </div>
  );
}

export default App;
