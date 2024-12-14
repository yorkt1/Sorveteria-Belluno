import '../Menu/Menu.css'
import React, { useEffect } from 'react';
import imgSo from './o-verdadeiro-gelato-italiano.jpg'

function Menu (){


    useEffect(() => {
        const handleScroll = () => {
          const imagem = document.querySelector('.imagem');
          const div2 = document.querySelector('.div2');
          const scrollY = window.scrollY;
          const offset = div2.offsetTop;
    
          // A posição da imagem se moverá conforme o scroll
          let scrollPosition = (scrollY - offset) * 0.5; // Controla a velocidade do movimento da imagem
          imagem.style.transform = `translateY(${scrollPosition}px)`;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Limpar o event listener ao desmontar o componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
return(
    <div className="wrapper">
      <div className="div1">
        <h1></h1>
      </div>
      <div className="div2">
           
        <div className="glass">
          <span>Sabores</span>
          <h2>Belluno</h2>
          <button>Menu</button>
        </div>
        <img
          src={imgSo}
          alt="Imagem"
          className="imagem"
        />
      </div>
      <div className="div3">
        <h1></h1>
      </div>
    </div>
)

}

export default Menu