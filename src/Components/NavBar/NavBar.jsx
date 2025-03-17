import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Importando os estilos
import { Link } from 'react-router-dom';
import { Menu, X, IceCream } from "lucide-react"; // Ícones para o menu

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detectar rolagem para mudar o estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Alternar o menu mobile
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}>
        <div className="navbar-container">
          <a className="logo" href="/">
            <IceCream className="icon" />
            <span className={isScrolled ? 'scrolled' : ''}>Belluno</span>
          </a>
          
          {/* Menu de navegação para desktop */}
          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>

          {/* Botão de menu para mobile */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} onClick={handleClick}>
            {isMenuOpen ? (
              <X className="icon" />
            ) : (
              <Menu className="icon" />
            )}
          </div>
        </div>

        {/* Linha abaixo dos itens da navbar */}
        <div className={`navbar-line ${isScrolled ? 'hide' : ''}`}></div>
      </nav>
    </header>
  );
};

export default NavBar;
