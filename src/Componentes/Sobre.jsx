import minhaImagem from "../img/1772501089199.jpg"
import '../Estilos/estilos.css'
function Sobre(titulo, descricao) {

        return(
            <>
            <h1 className = "Titulo"><b><span>Sobre mim:</span></b></h1><div><h2><p className="Descricao">Olá! Sou Léo Nóbrega e este é meu portifólio</p>
            <p className="Descricao"> Sejam muito bem-vindos! Aqui vocês encontram alguns de meus projetos, tanto aqueles para fins acadêmicos, feitos na faculdade, quanto criados para praticar. <p></p>Fiquem a vontade para olhar, entrar no meu Github.<p>Não se esqueçãm de me adicionar no LinkedIn e no Instagram.<p> Além disso, abaixo falo um pouco sobre mim, assim vocês podem me conhecer um pouco melhor</p></p></p></h2>
            <img src = {minhaImagem} className = "perfil"/> </div></>
            
        );

}

export default Sobre;