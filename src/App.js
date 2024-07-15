// import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
