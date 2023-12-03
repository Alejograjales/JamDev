import React, { useState } from 'react';
import MenuButton from './MenuButton';
import './MenuButton.css';
import './Navbar.css';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className={`nav-container ${clicked ? 'active' : ''}`}>
        <h2>Navbar <span>Jamdev</span></h2>

        {/* Icono de Carrito de Compras */}
        <div className="cart-icon">
          <span role="img" aria-label="carrito">🛒</span>
        </div>

        {/* Barra de Búsqueda */}
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
          <button type="button">Buscar</button>
        </div>

        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Home</a>
          <a onClick={handleClick} href="#h">Tienda</a>
          <a onClick={handleClick} href="#h">Categorias</a>
          <a onClick={handleClick} href="#h">Contacto</a>
        </div>
        <div className='menu'>
          <MenuButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`menu ${clicked ? 'active' : ''}`}></div>
      </div>
    </>
  );
}

export default Navbar;


