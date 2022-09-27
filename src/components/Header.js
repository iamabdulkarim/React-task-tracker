import React from 'react'
import Button from "./Button";

const Header = ({title,onAdd,showAdd}) => {
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red': 'green'} text={showAdd ? 'close' : 'Add'} onclick={onAdd}/>
      
    </header>
  )
}

Header.defaultProps = {
  title:'task tracker'
}

export default Header