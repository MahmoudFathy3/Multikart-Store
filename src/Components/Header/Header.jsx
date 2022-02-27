import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const Header = () => {
    const {products} = useSelector(state => state.Products)

    return (
    <header>
      <div className="container"> 
        <div className="row">
          <div className="left col">
              <h3>{products?.header}</h3>
              <span>{products.dir === "ltr" ? "Call +02 1110234902" : "اتصل بنا +02 1110234902"}</span>
          </div>
          <div className="right col">
            <div className="Wishlist">
              <FcLike className="header-icon" />
            <span>{products.dir === "ltr" ? "Wishlist" : "قائمة الرغبات"}</span>
              </div>
              <div className="Account">
                <AiOutlineUser className="header-icon" />
                <span>{products.dir === "ltr" ? "My Account" : "حسابي"}</span>
                <div className="Account-List">
                  <ul >
                    <li><a href="# ">{products.dir === "ltr" ? "Login" : "تسجيل الدخول"}</a></li>
                    <li><a href="# ">{products.dir === "ltr" ? "Register" : "تسجيل جديد"}</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>  
    </header>
  )
}

export default Header