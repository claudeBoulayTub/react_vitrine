import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${open ? 'active' : ''}`}>
        <li><Link to="/react-vitrine/" onClick={() => setOpen(false)}>Accueil</Link></li>
        <li><Link to="/react-vitrine/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        <li><Link to="/react-vitrine/a-propos" onClick={() => setOpen(false)}>À propos</Link></li>
        {/* Tu peux ajouter d’autres liens ici */}
      </ul>
    </nav>
  );
}

export default Navbar;
