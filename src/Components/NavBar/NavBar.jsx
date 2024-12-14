import React, { useState } from 'react';
import './Navbar.css'; // Assuming the CSS is saved in App.css
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <nav>
          <a className="logo" href="/">Belluno</a>
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} onClick={handleClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#">Início</a></li>
            <li> <Link to="/sobre">Sobre</Link></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>
    
    </div>
  );
};

export default NavBar;
