import React from 'react';
import "../styles/Button.css";

function Button({text, customClass, icon}) {
  return (
    <button className={`button ${customClass}`}>{text} {icon}</button> 
  )
}

export default Button;