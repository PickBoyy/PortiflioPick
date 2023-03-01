import React from "react";
import "./style.css";

interface ISkill {
  nome:string,
  linkImg:string
}

const Skills:Array<ISkill> = [
  {
    nome:'HTML-5',
    linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1079998238687510538/html-5.png'
  },
  {
    nome:'CSS-3',
    linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1079998223982280714/css-3.png'
  },
  {
    nome:'Sass',
    linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1079998256513298572/sass.png'
  },
  {
    nome:'Styled-component',
    linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1079998410129678356/styled-components.png'
  },
  {
    nome:'Bootstrap',
    linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1079998245352259705/bootstrap.png'
  },
  {
    nome:'Figma',
    linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1079998278642442290/figma.png'
           
  },
  {
    nome:'Git',
    linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1080523803576250408/icons8-git-144.png'
  },
  {
    nome:'JavaScript',
    linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1079998210774409266/js.png'
  },
  {
    nome:'TypeScript',
    linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1079998263018672198/typescript.png'
  },
  {
    nome:'React&React-Native',
    linkImg:'https://cdn.discordapp.com/attachments/682388777070886935/1079998293842599936/react.png'
  },
]

export const MySkills = () => {
  return (
    <div className="allSkills">
      <h1 className="titleSkill">Minhas Skills</h1>
      <div className="placeSkill">
        {Skills.map((skill) => (
          <div className="skill">
            <p className="nameSkill">{skill.nome}</p>
            <div className="divSkill">
              <img width={100} src={skill.linkImg} alt={skill.nome} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
