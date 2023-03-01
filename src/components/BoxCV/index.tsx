import React from 'react'
import './style.css'

export const BoxCV = () => {
  return (
    <div className='boxL'>
        <h2 className='nameBox'>Breno Malheiros</h2>
        <h4 className='titleBox'>Desenvolvedor Front-End</h4>
        <a href="Curriculo_cv.pdf" download><button className='btnBox'>Curriculum vitæ</button></a>
    </div>
  )
}
