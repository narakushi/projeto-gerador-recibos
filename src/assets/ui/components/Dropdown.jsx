import React from 'react'
import "../styles/Dropdown.css";

const Dropdown = ({children}) => {
  return (
    <div className='dropdown'>
      {children}
    </div>
  )
}

export default Dropdown;