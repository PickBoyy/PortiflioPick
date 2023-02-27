import React from 'react'
import './style.css'

interface IProject {
    nome:string,
    tecnologias:string,
    link:string,
    linkGit:string,
    linkImg:string,
}

const Project:Array<IProject> = [
    {
    nome:'D&D',
    tecnologias:'React',
    link:'https://dnd-5e-battle-frontend.vercel.app/',
    linkGit:'',
    linkImg:'',

    },
    {
    nome:'',
    tecnologias:'',
    link:'',
    linkGit:'',
    linkImg:'',
    },
]

export const Projects = () => {
  return (
    <div>
        {Project.map(() => (

        ))}
    </div>
  )
}
