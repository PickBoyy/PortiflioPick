import React from 'react'
import './style.css'

interface ICertificados {
    nome:string,
    link:string,
}
const Certificados:Array<ICertificados> = [
    {
        nome:'HTML-5',
        link:'HTML_5.pdf'
    },
    {
        nome:'CSS-3',
        link:'CSS_3.pdf'
    },
    {
        nome:'CSS-Moderno',
        link:'CSS_Moderno.pdf'
    },
    {
        nome:'Sass',
        link:'SASS.pdf'
    },
    {
        nome:'JS I',
        link:'JS_I.pdf'
    },
    {
        nome:'JS II',
        link:'JS_II.pdf'
    },
    {
        nome:'JS III',
        link:'JS_III.pdf'
    },
    {
        nome:'JS IV',
        link:'JS_IV.pdf'
    },
    {
        nome:'JS V',
        link:'JS_V.pdf'
    },
    {
        nome:'Git&GitHub',
        link:'GIT__GITHUB.pdf'
    },

]
export const Certificates = () => {
  return (
    <div className='allCert'>
        <h1 className='titleCert'>Certificados</h1>
        <div className='placeCert'>
        {Certificados.map((certificado) => (
            <div className='divCert'>
                <a className='linkCert' href={certificado.link} download>
                   <button className='btnCert'>{certificado.nome}</button>
                </a>
            </div>
        ))}
        </div>
    </div>
  )
}
