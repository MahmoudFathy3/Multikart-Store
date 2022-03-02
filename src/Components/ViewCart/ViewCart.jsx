import React, {useEffect} from 'react';
import {HandlerNumber} from '../ChangeNum/ChangeNum'


const ViewCart = ({cart, dir, RemoveCart}) => {

  useEffect(() => {
    dir === "rtl" && HandlerNumber(document.body)

    const Price = document.querySelector(".View-Cart .Price");
    let Total = 0;
    cart?.map(item => {
      Total += Number(item.price); 
    })
    if(Price){
      Price.innerHTML = Total.toString() ;
    }
    
  },[dir,cart])

  const List = cart.length ? cart.map((item,index) => {
    return(
      <div className="List-View" key={index}>
        <div className="View-info">
          <h3>{item.name}</h3>
          <span>{item.price}</span>
          <p>{item.discription}</p>
          <span>
            <button className="button" onClick={() => RemoveCart(index)}>{ dir === "ltr" ? "Remove" : "حذف"}</button>
          </span>
        </div>
        <div className="View-Image">
        <img src={item.image} alt="" />
        </div>
      </div>
    )
  }) : <p style={{textAlign: 'center', padding: "10px", margin: "0px"}}> {dir === "ltr" ? "There is no Product Available" : "لا يوجد أي منتج متوفر"}</p>
  
  return (
    <div className="View-Cart">
      <div className="container">
        <div className="Cart-info">
        {List}
          
          {
            cart.length ? <div className="View-Total">
            <h3>{ dir === "ltr" ? "Total:" : "المجموع:"} <span className="Price"></span></h3>
            
            <button>{ dir === "ltr" ? "Check out" : "الدفع"}</button>
          </div> : ""
          }
        </div>
      </div>
    </div>
  )
}

export default ViewCart