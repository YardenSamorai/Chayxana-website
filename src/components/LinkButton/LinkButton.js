import React from 'react'
import "./LinkButton.css";



const LinkButton = ({ name, to }) => {
  return (
    <a href={to} className="link-btn"> 
      {name}
    </a>
  )
}

export default LinkButton