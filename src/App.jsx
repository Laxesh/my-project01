import Home from "./Pages/Home";
import "./App.css";
import About from "./Pages/About";

import Contect from "./Pages/Contect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
