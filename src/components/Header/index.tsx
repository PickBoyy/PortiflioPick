import React from 'react'
import './styles.css'

export const Header = () => {
  return (
    <nav className='header'>
      <h2 className='titleHome'>MALHEIROS</h2>
      <button className='btnSkills'>My skills</button>
      <button className='btnProject'>Porjects</button>
      <button className='btnContact'>Contact</button>
    </nav>
  )
}
