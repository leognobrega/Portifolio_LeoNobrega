import instaicon from '../img/instagram.png'
import linkicon from '../img/linkedin.png'
import emailicon from '../img/enviar.png'
import giticon from '../img/github.png'
import '../Estilos/estilos.css'


function Contato () {

    return(
        <><h1 className = "Titulo">Fale comigo!</h1><p> <h3 className = "Descricao">Estes são os meus principais meios de contato. Espero que possamos construir algo juntos =)</h3> </p>
        
<div className="icons">
  <a href = "https://www.instagram.com/leognobrega/">
    <img src={instaicon} className="iconC"/></a>

  <a href = "https://www.linkedin.com/in/leonardo-nobrega-95833357"> 
    <img src={linkicon} className="iconC" /> </a>

    <a href = "https://github.com/leognobrega">
    <img src={giticon} className="iconC" /></a>

  <a href = "mailto:leo.gnobrega@hotmail.com">
    <img src={emailicon} className="iconC" /></a>

</div></>

    );

}

export default Contato;