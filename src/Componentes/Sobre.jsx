import minhaImagem from "../img/1772501089199.jpg"
import '../Estilos/estilos.css'
function Sobre(titulo, descricao) {

        return(
            <>
            <h1 className = "Titulo"><b>Sobre mim:</b></h1><div><h3><p>Olá! Sou Léo Nóbrega e este é meu exercício de fixação</p>
            <p>Nascido e criado na cidade de Salto-SP, moro atualmente na cidade de Indaiatuba, onde trabalho no Vitória Hotel Convention. Atualmente matriculado no 2º semestre do curso de Desenvolvimento de Software Multiplataforma na Fatec</p></h3>
            <img src = {minhaImagem} className = "perfil"/> </div></>
            
        );

}

export default Sobre;