import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const pageTitles = {
  "/": "Poet",
  "/books": "Books",
  "/read": "Read",
  "/watch": "Watch",
  "/listen": "Listen",
  "/mana-moana": "Mana Moana",
};

function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const subtitle = pageTitles[location.pathname] || "Poet";

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 1400;
      const progress = Math.min(window.scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dark = `rgba(54,153,160,1)`;
  const light = `rgba(165,204,202,${scrollProgress})`;

  return (
    <nav
      className="navbar"
      style={{
        background: `linear-gradient(to bottom, ${dark}, ${light})`,
      }}
    >
      <div className="nav-logo">
        <NavLink to="/">Karlo Mila, {subtitle}</NavLink>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/read">Read</NavLink></li>
        <li><NavLink to="/watch">Watch</NavLink></li>
        <li><NavLink to="/listen">Listen</NavLink></li>
        <li><NavLink to="/books">Books</NavLink></li>
        <li><NavLink to="/mana-moana">Mana Moana</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;