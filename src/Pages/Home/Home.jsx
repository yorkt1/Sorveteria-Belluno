import React from 'react';

import Menu from "../../Components/Menu/Menu.jsx";
import Inicial from "../../Components/Inicial/Inicial.jsx";
import NavBar from "../../Components/NavBar/NavBar.jsx";


const Home = () => {
  return (
    <div>

      <NavBar />
      <Inicial />
      <Menu />
    </div>
  );
}

export default Home;