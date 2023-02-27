import React from 'react'
import './style.css'

interface IProject {
    nome:string,
    tecnologias:string,
    link:string,
    linkGit:string,
    linkImg:string,
}

const Projects:Array<IProject> = [
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

export const MyProjects = () => {
  return (
    <div>
        {Projects.map((project) => (
            <div>
                {project.nome}
            </div>
        ))}
    </div>
  )
}
