import {useSelector} from 'react-redux'
import FooterLeft from './FooterLeft/Footer_Left';
import FooterRight from './Footer_Right/Footer_Right';
import {FiFacebook} from "react-icons/fi";
import {BsInstagram} from "react-icons/bs";
import {AiOutlineLinkedin,AiOutlineWhatsApp} from "react-icons/ai";

const Footer = () => {
  const {products} = useSelector(state => state.Products)

  return ( 
    <footer>
      <div className="container">
        <div className="Footer-List">
          <FooterLeft Logo= {products?.Logo}/>
          <FooterRight data= {products?.Footer} dir={products.dir}/>
        </div>
        <div className="Footer-copyRight">
          <p>Mahmoud Fathy &copy;copyright 2022</p>
          <div className="Footer-Icons">
            <ul>
            <li>
              <a href="https://www.facebook.com/Mahmoud.Fathy199/" target={`_blank`} >
              <FiFacebook className="facebook"/></a>
              </li>
            <li>
              <a href="https://www.instagram.com/mahmoudfathy109/" target={`_blank`} >
              <BsInstagram className="instagram"/></a></li>
            <li>
              <a href="https://www.linkedin.com/in/mahmoud-fathy-2b3b16215/" target={`_blank`} >
              <AiOutlineLinkedin className="linkedin"/></a>
              </li>
            <li><a href="# "> <AiOutlineWhatsApp className="whatsapp"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer