import React, {useEffect} from 'react';

const ViewCart = ({cart, dir, RemoveCart}) => {

  useEffect(() =>{
      const Total = document.querySelectorAll(".List-View .price");
      const Price = document.querySelector(".View-Cart .View-Total h3 span");
      const RemoveBtn = document.querySelector(".List-View  .button");
        Total.forEach(item => {
            Price.innerHTML = Number(Price.innerHTML) + Number(item.innerHTML);
          })

          if(RemoveBtn){
            RemoveBtn.onClick = () => {
              Total.forEach(item => {
                Price.innerHTML = Number(Price.innerHTML) - Number(item.innerHTML);
              })
            }
          }
        },[])

  const List = cart.length ? cart.map((item,index) => {
    return(
      <div className="List-View" key={index}>
        <div className="View-info">
          <h3>{item.name}</h3>
          <span className="price">{item.price}</span>
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
            <h3>Total: <span></span></h3>
            <button>{ dir === "ltr" ? "Check out" : "الدفع"}</button>
          </div> : ""
          }
        </div>
      </div>
    </div>
  )
}

export default React.memo(ViewCart)