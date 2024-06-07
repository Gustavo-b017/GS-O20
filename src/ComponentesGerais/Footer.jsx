import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"

import { footerIcons } from "./footer/dadosFooter.jsx";

import fiap from './footer/Fiap.png';
import o20 from './footer/o20.png';

function Footer() {

  return (
    <footer className="footer">
      <ul className="FooterUlIcone">
        {footerIcons.map((icone) => (
          <li key={icone.id}>  
            <a className="footerAIcones" href="#">
              <ion-icon 
                name={icone.nome}/>
            </a>
          </li>
        ) ) }
      </ul>

      <ul className="footerUImg ">
          <li>
            <img src={fiap} className="footerImg" />
          </li>

          <li>
            <img src={o20} className="footerImg" />
          </li>
      </ul>

    </footer>
  );
}


export default Footer;