import React,{Fragment} from 'react'
import ReactDom from "react-dom";


export const ListProduct = ({item,isOpen, isOpenModel,HandleCart,dir}) => {
  return (
    <div className={`List-Product ${isOpen && "show"}`}  >
      <div className="Modal-image">
        <img src={item.image} alt="" />
      </div>
        <div className="Modal-wrapper">
          <h3>{item.name}</h3>
          <p>{item.discription}</p>
          <span>{item.price}</span>
          <button onClick={() => HandleCart(item)}>{item.button}</button>
        </div>
        <div className="Close-Modal">
            <span onClick={isOpenModel}>x</span>
          </div>
    </div>
  )
}

export const Overlay = ({isOpen}) => {
  return <div className={`overlay ${isOpen && "show"}`}></div>
}


const ShowProduct = ({showProduct, isOpen , isOpenModel, dir,HandleCart}) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <div className={`Show-Product ${isOpen && "show"}`} dir={dir}>
          <Overlay  isOpen={isOpen}/>
          <ListProduct item={showProduct} isOpen={isOpen} isOpenModel={isOpenModel} HandleCart={HandleCart} dir={dir}/>
        </div>,
        document.getElementById("modal")
      )}
    </Fragment>
  )
}

export default ShowProduct