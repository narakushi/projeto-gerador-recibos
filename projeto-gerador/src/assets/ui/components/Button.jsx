import React from "react";
import "../styles/Button.css";
import { Link } from "react-router-dom";

const Button = ({ text, customClass, icon, url }) => {
  return (
    <Link to={url} className={`button ${customClass}`}>
      {text} {icon}
    </Link>
  );
};

export default Button;
