import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";

import Home from "./pages/home";
import Books from "./pages/books";
import Read from "./pages/read";
import Watch from "./pages/watch";
import Listen from "./pages/listen";
import ManaMoana from "./pages/manamoana";

function App() {
  return (
    <>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/read" element={<Read />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/mana-moana" element={<ManaMoana />} />
      </Routes>
    </>
  );
}

export default App;