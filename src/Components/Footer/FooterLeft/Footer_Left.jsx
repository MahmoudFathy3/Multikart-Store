import React from 'react'

const Footer_Left = ({Logo}) => {


  const List_Logo = Logo?.map((item,index) => {
    return(
      <div className="info" key={index}>
        <img src={item.image} alt="" />
        <p>{item.discription}</p>
      </div>
    )
  })

  return (
    <div className="footer-left">
    {List_Logo}
    </div>
  )
}

export default Footer_Left