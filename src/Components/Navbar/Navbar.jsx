import React,{Fragment, useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import { AiOutlineBars, AiOutlineShoppingCart,AiOutlineDelete } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Navbar = ({HandleLanguage, cart, RemoveCart}) => {
  const {products} = useSelector(state => state.Products)
  const Logo = products.Logo?.map((img,index) => <img src={img.image} alt="" key={index}/>)

  const List = products.nav?.map(item => {
    return(
      <Fragment key={item.name}>
        <li><Link to="/" className={products.dir === 'ltr' ? 'left' : "right"}>{item.name}</Link></li>
      </Fragment>
    )
  })
  
  // Toggle Menu
  const HandleMenu = useCallback(() => {
    const active = products.dir === 'ltr' ? "active-left" : "active-right";
    document.querySelector('.Toggle .List-Moblie').classList.toggle(active)
    document.querySelector('.Toggle .overLay').classList.toggle('open')
  },[products])

  useEffect(() => {
    // Navbar Fixed
    document.onscroll = () => {
      if(window.scrollY >= 600){
        document.querySelector('nav').classList.add('fixed');
      }else {
        document.querySelector('nav').classList.remove('fixed');
      }
    }
    // Close Menu bar
    document.onkeyup = (e) => {
      const active = products.dir === 'ltr' ? "active-left" : "active-right";
      if(e.key === 'Escape'){
        document.querySelector('.Toggle .List-Moblie').classList.remove(active)
        document.querySelector('.Toggle .overLay').classList.remove('open')    
      }
    }
  },[products])


  const ListCart = cart.length ? cart.map((item,index) => {
    return(
        <div className="List-Cart" key={index}>
        <img src={item.image} alt="" />
        <div>
          <h2>{item.name}</h2>
          <span>{item.price}</span>
        </div>
        <AiOutlineDelete className="remove-cart" onClick={() => RemoveCart(index)}/>
        </div>
    )
  }) : <p style={{textAlign: 'center'}}> {products.dir === "ltr" ? "There is no Product Available" : "لا يوجد أي منتج متوفر"}</p>

  return (
    <nav>
      <div className="container">
        <div className='row'>
          <div className='Logo col col-sm-6 col-md-4'> 
          {Logo}
          </div>
        <ul className='col List-Menu' > 
          {List}
          <div className="Setting-Language">
            <GrLanguage  className="Setting-icon"/>
            <div className="Nav-Language">
              <span>Select Language</span>
              <div className="Select-Lang">
                <button onClick={HandleLanguage} value="ar">العربيه</button>
                <button onClick={HandleLanguage} value="en">English</button>
              </div>
            </div>          
          </div> {/* End Language */}    

            {/* Start Cart */}
              <div className="Shopping-Cart">
                  <AiOutlineShoppingCart className="Cart-Icons"/>
                <div className={`Cart-info ${products.dir === "ltr" ? 'right' : 'left'}`}>
                  {ListCart}
                  { cart.length !== 0 && 
                  <div className="Cart-View">
                    <Link to="/ViewCart">{products.dir === "ltr" ? "View Cart" : "عرض عربة التسوق"}</Link>
                    <Link to="/CheckOut">{products.dir === "ltr" ? "Check out" : "الدفع"}</Link>
                  </div>
                  }
                </div>
            </div> {/* End Cart */}
        </ul>

      {/* Toggle Mobile */}
        <div className='Toggle col'>
          <div className='overLay'></div>
          <div className="Shopping-Cart">
                  <AiOutlineShoppingCart className="Cart-Icons"/>
                <div className={`Cart-info `}>
                  {ListCart}
                  { cart.length !== 0 && 
                  <div className="Cart-View">
                    <Link to="/ViewCart">{products.dir === "ltr" ? "View Cart" : "عرض عربة التسوق"}</Link>
                    <Link to="/CheckOut">{products.dir === "ltr" ? "Check out" : "الدفع"}</Link>
                  </div>
                  }
                </div>
            </div> {/* End Cart */}
          <div className='Menu'>
          <AiOutlineBars  className='Toggle-Menu' onClick={HandleMenu}/>
          </div>
          <div className={`List-Moblie ${products.dir === 'ltr' ? 'left' : "right"}`} >
            <h2 className="close" onClick={HandleMenu}>{products.dir === 'ltr' ? 'Close' : "قفل"}</h2>
            <ul>
              {List}
              <select  onChange={HandleLanguage}>
                <option >select your Language</option>
                <option value="ar">العربيه</option>
                <option value="en">English</option>
              </select>  

            </ul>
          </div>

        </div> {/* End Toggle Mobile */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar