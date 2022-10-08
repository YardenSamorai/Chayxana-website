import React from 'react'
import "./LinkButton.css";



const LinkButton = ({name}) => {
  let link = `#${name}`;
  return (
    <a href={link} className="link-btn"> 
      {name}
    </a>
  )
}

export default LinkButton