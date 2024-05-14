import Home from "./Pages/Home";
import "./App.css";
import About from "./Pages/About";

import Contect from "./Pages/Contect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
