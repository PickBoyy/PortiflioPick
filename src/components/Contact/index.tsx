import React from 'react'
import './style.css'


export const Contact = () => {
  return (
    <div className='allContacts'>
        <h1 className='titleContacts'>Contato</h1>
        <div className='placeContacts'>

            <div className='textContact'>
                <div className='circleIcon'>
                    <img src="https://cdn.discordapp.com/attachments/682388777070886935/1080163041481609216/icons8-linkedin-2-30.png" alt="icon-Linkedin" />
                </div>
                <p>Linkedin</p>
                <p>@BrenoMalheiros</p>
            </div>

            <div className='textContact'>
                <div className='circleIcon'>
                    <img width={30} src="https://cdn.discordapp.com/attachments/682388777070886935/1080009840371441704/icons8-github-48.png" alt="icon-GitHub" />
                </div>
                <p>GitHub</p>
                <p>@BrenoMalheiros</p>
            </div>

            <div className='textContact'>
                <div className='circleIcon'>
                    <img src="https://cdn.discordapp.com/attachments/682388777070886935/1080163031796957304/icons8-nova-mensagem-30.png" alt="icon-Email" />
                </div>
                <p>E-mail</p>
                <p>@brenovirgilio14@gmail.com</p>
            </div>

            <div className='textContact'>
                <div className='circleIcon'>
                    <img src="https://cdn.discordapp.com/attachments/682388777070886935/1080163003028222103/icons8-telefone-30.png" alt="icon-Telefone" />
                </div>
                <p>Telefone</p>
                <p>(77)9 9969-7149</p>
            </div>

            <div className='textContact'>
                <div className='circleIcon'>
                    <img src="https://cdn.discordapp.com/attachments/682388777070886935/1080163020275191808/icons8-instagram-30.png" alt="icon-Instagram" />
                </div>
                <p>Instagram</p>
                <p>@breno_malheiros07</p>
            </div>

        </div>
    </div>
  )
}
