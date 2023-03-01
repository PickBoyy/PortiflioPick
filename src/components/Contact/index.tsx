import React from 'react'
import './style.css'

interface IContacts {
    nome:string,
    linkImg:string,
    contato:string,
    link:string,
}
const Contacts:Array<IContacts> = [
    {
        nome:'Linkedin',
        linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1080163041481609216/icons8-linkedin-2-30.png',
        contato:'@BrenoMalheiros',
        link:'https://www.linkedin.com/in/breno-malheiros-4889b6267/'
    },
    {
        nome:'GitHub',
        linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1080009840371441704/icons8-github-48.png',
        contato:'PickBoyy',
        link:'https://github.com/PickBoyy'
    },
    {
        nome:'E-mail',
        linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1080163031796957304/icons8-nova-mensagem-30.png',
        contato:'brenovirgilio14@gmail.com',
        link:'https://mail.google.com/mail/u/0/#inbox'
    },
    {
        nome:'Telefone',
        linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1080163003028222103/icons8-telefone-30.png',
        contato:'(77)99969-7149',
        link:'https://wa.me/5577999697149'
    },
    {
        nome:'Instagram',
        linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1080163020275191808/icons8-instagram-30.png',
        contato:'@breno_malheiros07',
        link:'https://www.instagram.com/breno_malheiros07/'
    },

]

export const Contact = () => {
  return (
    <div className='allContato'>
        <h1 className='titleContact'>Contato</h1>
    
        <div className='placeContact'>
            {Contacts.map((contact) => (
                <div className='contacts'>
                <a target={'_blank'} href={contact.link}>
                    <div className='iconContato'>
                        <img width={35} src={contact.linkImg} alt={contact.nome}/>
                    </div>
                </a>
                <p className='nameContacts'>{contact.nome}</p>
                <p className='linkContacts'>{contact.contato}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
