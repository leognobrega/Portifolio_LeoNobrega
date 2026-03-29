import meusProjetos from '../img/java_projeto.png'
import botaoLike from '../img/gostar.png'
import botaoDislike from '../img/naogostar.png'
import { useState } from 'react'

function Post (){
const [likes, setLikes] = useState(0)
const [dislikes, setDislikes] = useState(0)


return(
<>
      <h1 className="Titulo"><span>Projetos Criados</span></h1>

      <div className="CardProj">
        <h2 className="NomeProj">GetMeet</h2>

        <a href = "https://github.com/leognobrega/GetMeet"><img src={meusProjetos} className="ImgProj" /></a>
        <h4 className = "detalheProj">Projeto de sistema de agendamento de reuniões em JAVA</h4>

        
      </div>
    </>

)

}

export default Post;