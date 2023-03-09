import React from 'react'
import './style.css'

export const AboutMe = () => {
  return (
    <div className='allAbout'>
        <h1 className='titleAbout'>Sobre min</h1>
        <div className='placeAbout'>
            <div className='imgAbout'>
                <img  className='imgFace' width={400} src="https://cdn.discordapp.com/attachments/682388777070886935/1079991456342757447/pick.png" alt="pickCartoon"/>
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
