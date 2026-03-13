import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 1400; // distance for full transition
      const progress = Math.min(window.scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark → Light
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
        <NavLink to="/">Karlo Mila, Poet</NavLink>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
        <li>
          <NavLink to="/read">Read</NavLink>
        </li>
        <li>
          <NavLink to="/watch">Watch</NavLink>
        </li>
        <li>
          <NavLink to="/listen">Listen</NavLink>
        </li>
        <li>
          <NavLink to="/mana-moana">Mana Moana</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;