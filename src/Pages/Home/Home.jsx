import React from 'react';
import { Link } from 'react-router-dom';
import Menu from "../../Components/Menu/Menu.jsx";
import Inicial from "../../Components/Inicial/Inicial.jsx";


const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        
        </ul>
      </nav>
      <Inicial />
      <Menu />
    </div>
  );
}

export default Home;