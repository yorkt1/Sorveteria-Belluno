import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react'; // Certifique-se de importar o ícone corretamente
import './Inicial.css'; // Certifique-se de ter o CSS

const Inicial = () => {
  // Refs para os elementos do DOM
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);
  const floatingIconsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const background = backgroundRef.current;
      const content = contentRef.current;
      const floatingIcons = floatingIconsRef.current;

      // Aplica transformações de parallax nos elementos
      if (background) {
        background.style.transform = `translateY(${scrollY * 0.5}px)`; // Efeito parallax
      }

      if (content) {
        content.style.transform = `translateY(${scrollY * 0.2}px)`;
        content.style.opacity = `${1 - scrollY * 0.002}`; // Efeito de desvanecer
      }

      if (floatingIcons) {
        floatingIcons.style.transform = `translateY(${scrollY * 0.1}px)`; // Efeito de flutuar
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Chamando a função uma vez para efeito inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="home" className="hero-container">
      {/* Fundo com efeito parallax */}
      <div
        ref={backgroundRef} // Refs corretamente aplicados
        className="hero-background"
        style={{
          backgroundImage: 'linear-gradient(135deg, #FFCCD5 0%, #FFF0DB 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transformOrigin: 'center',
        }}
      />

      {/* Conteúdo com efeitos de parallax e opacidade */}
      <div ref={contentRef} className="hero-content">
        <h1 className="hero-title">
          <span className="block">Belluno</span>
          {/* <span className="block mt-2">Gelato</span> */}
        </h1>
        <p className="hero-description">
          Produtos de qualidade para voce 
        </p>
        <a href="#flavors" className="hero-button">
          Sabores
        </a>
      </div>

      {/* Ícones flutuantes */}
      <div ref={floatingIconsRef} className="floating-icons">
        <div className="icon top-1/4 left-1/4" />
        <div className="icon top-2/3 left-1/5" />
        <div className="icon top-1/3 right-1/4" />
        <div className="icon bottom-1/4 right-1/5" />
      </div>

      {/* Indicador de rolagem */}
      <div className="scroll-indicator">
        <div className="animate-bounce">
          <ArrowDown className="scroll-icon" /> {/* Aqui o ícone de seta para baixo */}
        </div>
      </div>
    </div>
  );
};

export default Inicial;
