import React from "react";
import "./style.css";

interface IProject {
  nome: string;
  tecnologias: string;
  link: string;
  linkGit: string;
  linkImg: string;
}

const Projects: Array<IProject> = [
  {
    nome: "D&D",
    tecnologias: "React, CSS",
    link: "https://dnd-5e-battle-frontend.vercel.app/",
    linkGit: "https://github.com/PickBoyy/dnd-5e-battle-frontend",
    linkImg:
      "https://cdn.discordapp.com/attachments/682388777070886935/1080003528648560700/image.png",
  },
  {
    nome: "Portifólio",
    tecnologias: "React, CSS",
    link: "https://portifolio-pickdev.vercel.app/",
    linkGit: "https://github.com/PickBoyy/PortiflioPick",
    linkImg:
      "https://cdn.discordapp.com/attachments/682388777070886935/1080003253514813531/image.png",
  },
];

export const MyProjects = () => {
  return (
    <div className="allBox">
      <h1 className="titleProject">Projetos</h1>
      <div className="placeBox">
        {Projects.map((project) => (
          <div className="boxProject">
            <img
              className="imgProject"
              src={project.linkImg}
              alt="ImgProject"
            />
            <hr />
            <div className="placeInfoProject">
                <h5>{project.nome}</h5>
                <p>Tecnologias: {project.tecnologias}</p>
                <a target={"_blank"} href={project.linkGit}>
                  <img
                    width={30}
                    src="https://cdn.discordapp.com/attachments/682388777070886935/1080009840371441704/icons8-github-48.png"
                    alt="iconGit"
                  />
                </a>
                <a target={"_blank"} href={project.link}>
                  <img
                    width={30}
                    src="https://cdn.discordapp.com/attachments/682388777070886935/1080009823359344670/icons8-link-48.png"
                    alt="iconLink"
                  />
                </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
