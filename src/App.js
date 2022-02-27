import { useEffect, useState } from "react";
import {getProducts} from './Store/Get-Data-API/GetData'
import {useDispatch,useSelector} from 'react-redux'
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import ViewCart from "./Components/ViewCart/ViewCart";
import Checkout from "./Components/Checkout/Checkout";
import ShowProduct from "./Components/ShowProduct/ShowProduct";

function App() {
  const [val, setVal]= useState('en')
  const [cart, setCart] = useState([]);
  const [showProduct, setShowProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const {products} = useSelector(state => state.Products)
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getProducts(val))

    // Button Top Page
    const Topbtn = document.querySelector('.Top-Page');
    window.onscroll = () => {
      if(window.scrollY > 600){
        console.log('yes');
        Topbtn.classList.add('Top');
      }else {
        Topbtn.classList.remove('Top');
      }
      
      Topbtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      })
    }

  },[dispatch,val])

// Toggle Language
  const HandleLanguage = (e) => {
    setVal(e.target.value)
    document.querySelector('.Toggle .overLay').classList.remove('open')
  }

// Add To Cart
  const HandleCart = (item) => {
    setCart([...cart, item])
  }

// Remove cart
  const RemoveCart = (idx) =>{
    setCart(Prev => {
      return cart.filter((item,index) => index !== idx)
    })
  }
  
  //Show Product
  const HandleShowProduct = (product) => {
    setShowProduct(product)
  }

  const isOpenModel = (payload) => {
    setIsOpen(!isOpen)
  }


// Loading Page
  window.onload = () => {
    document.querySelector('.Loading').style = `visibility: hidden;  opacity: 0;`
  }

  return (
    <div className="App" dir={products.dir} >
    <BrowserRouter>
      <div className="Top-Page">
      <button>{products.dir === "ltr" ? "Top" : "أعلي"}</button>
      </div>
      <div className="Loading">
        <span></span>
      </div>
      <Header />
      <Navbar HandleLanguage={HandleLanguage} cart={cart} RemoveCart={RemoveCart}/>
      <Routes>
        <Route path="/*" element={<Home HandleCart={HandleCart} HandleShowProduct={HandleShowProduct} isOpenModel={isOpenModel}/>} />
        <Route path="/ViewCart" element={<ViewCart cart={cart} RemoveCart={RemoveCart} dir={products.dir}/>} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <ShowProduct showProduct={showProduct} isOpen={isOpen} isOpenModel={isOpenModel} dir={products.dir} HandleCart={HandleCart}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
