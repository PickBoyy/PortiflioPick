import React from 'react'
import './style.css'

export const MySkills = () => {
  return (
    <div>
        <h1 className='titleAbout'>Minhas Skills</h1>
        <div className='place'>

          <div className='Placeicon'>
            <img className='icon' src='src\img\html-5.png' alt='HTML5'/>
          </div>

          <div className='Placeicon'>
          <img className='icon' src='src\img\css-3.png' alt='CSS3'/>
          </div>

          <div className='Placeicon'>
            <img className='icon' src='src\img\sass.png' alt='SASS'/>
          </div>

          <div className='Placeicon'>
          <img className='icon' src='src\img\styled-components.png' alt='STYLED-COMPONENT'/>
          </div>

          <div className='Placeicon'>
          <img className='icon' src='src\img\bootstrap.png' alt='BOOTSTRAP'/>
          </div>

          <div className='Placeicon'>
          <img className='icon' src='src\img\figma.png' alt='FIGMA'/>
          </div>

          <div className='Placeicon'>
          <img className='icon' src='src\img\js.png' alt='JAVASCRIPT'/>
          </div>

          <div className='Placeicon'>
          <img className='icon' src='src\img\typescript.png' alt='TYPESCRIPT'/>
          </div>

          <div className='Placeicon'>
          <img className='icon' src='src\img\react.png' alt='REACT/RECT-NATIVE'/>
          </div>
        </div>
    </div>
  )
}
