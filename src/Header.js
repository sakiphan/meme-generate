import React from 'react'
import "./Header.css"

const header = (props) => {
  return (
    <header>
        <p>{props.name}</p>
    </header> 
  )
}

export default header;