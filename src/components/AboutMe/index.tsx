import React from 'react'
import './style.css'

export const AboutMe = () => {
  return (
    <div>
        <h1 className='titleAbout'>Sobre min</h1>
        <div className='place'>
            <div className='imgAbout'>
                <img src="\src\img\pick.png" alt="pickCartoon"/>
            </div>
            <div className='textAbout'>
                <p>Olá, me chamo Breno tenho 19 anos, adoro deixar as coisas mais bonitas, sou um intusiasta pela área de desenvolvimento front-end,
                de um ano pra cá venho estudando asiduamente à respeito.
                </p>
            </div>
        </div>
    </div>
  )
}