import javaProjeto from '../img/java_projeto.png'
import easyGestProjeto from '../img/EasyGest.png'
import gmiHackaton from '../img/GMI-hackaton.png'
import botaoLike from '../img/gostar.png'
import botaoDislike from '../img/naogostar.png'
import { useState } from 'react'

function Post (){
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const projetos = [
    {
      nome: 'GetMeet',
      href: 'https://github.com/leognobrega/GetMeet',
      img: javaProjeto,
      detalhe: 'Projeto de sistema de agendamento de reuniões em JAVA',
    },
    {
      nome: 'EasyGest',
      href: 'https://github.com/leognobrega/EasyGest_Frontend',
      img: easyGestProjeto,
      detalhe: 'ERP desenvolvido para Projeto Interdisciplinar. Verifique o front e o back no Github',
    },
    {
      nome: 'Sistema de Segurança GM',
      href: 'https://github.com/leognobrega/hackaton2025',
      img: gmiHackaton,
      detalhe: 'Projeto GMI: sistema de segurança e automação desenvolvido em hackathon',
    },
  ]

  return(
    <>
      <h1 className="Titulo"><span>Projetos Criados</span></h1>

      <div className="ProjetosGrid">
        {projetos.map((projeto) => (
          <div className="CardProj" key={projeto.nome}>
            <h2 className="NomeProj">{projeto.nome}</h2>
            <a href={projeto.href}>
              <img src={projeto.img} className="ImgProj" alt={projeto.nome} />
            </a>
            <h4 className="detalheProj">{projeto.detalhe}</h4>
          </div>
        ))}
      </div>
    </>
  )
}

export default Post;