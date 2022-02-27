import {Routes, Route, Link} from 'react-router-dom'
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai"
import Slide1 from './Slide1';
import Slide2 from './Slide2';


// import { Pagination, Navigation } from "swiper";

const Left = ({Product, dir}) => {

  return (
    <div className="Left">
      <div className="header-Left">
        <span> {dir === 'ltr' ? "UNDER $20 | FREE DELIVERY" : "أقل من 20 دولارًا | توصيل مجاني"}</span>
          <div>
            <Link  to='/'>
            <b>
              { dir === "ltr" ? <AiFillCaretLeft /> : <AiFillCaretRight /> }
            </b>
            </Link>
            <Link to='/slide2'>
            <b>
            { dir === "ltr" ? <AiFillCaretRight /> : <AiFillCaretLeft /> }
            </b>
            </Link>
          </div>
      </div>
          <Routes>
            <Route path='/' element={<Slide1 Product={Product}/>} />
            <Route path='/slide2' element={<Slide2 Product={Product}/>} /> 
          </Routes> 
  </div>
)
}

export default Left