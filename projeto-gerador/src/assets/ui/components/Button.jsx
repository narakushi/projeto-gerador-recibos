import React from 'react';
import "../styles/Button.css";

function Button({text, customClass}) {
  return (
    <button className={`button ${customClass}`}>{text}</button> 
  )
}

export default Button;