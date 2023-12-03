
import React from 'react';
import './MenuButton.css';

function MenuButton(props) {
  return (
    <div className="menu">
      <div
        onClick={props.handleClick}
        className={`desplegar-menu ${props.clicked ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default MenuButton;
