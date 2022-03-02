import React from 'react'
import {AiOutlineHeart,AiOutlineSearch} from 'react-icons/ai'

const Product = ({heading, Product, HandleCart, HandleShowProduct, isOpenModel}) => {

    const HandleProductsModal = (item) =>{
      HandleShowProduct(item)
      isOpenModel()
    }

  const List = Product?.map((item,index) => {
    return(
      <div className="item" key={index} >
        <div className="Product-img" >
          <img src={item.image} alt='' />
        </div>
        <div className="Product-info">
          <div className="info-item">
            <AiOutlineHeart className="Product-icons"/>
            <AiOutlineSearch className="Product-icons" onClick={() => HandleProductsModal(item)}/>
          </div>
          <button onClick={() => HandleCart(item)}>{item.button}</button>
        </div> 
      </div>
    )
  })
  // {() => HandleCart(item)}
  return (
    <div className='Products'>
      <div className='container'>
        <div className="row">
          <div className='Product-Heading'>
            <span>{heading?.heading}</span>
            <h3>{heading?.name}</h3>
            <p>{heading?.discription}</p>
          </div>
        <div className="Product-items">
          {List}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Product