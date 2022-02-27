import React from 'react'

const Footer_Right = ({data, dir}) => {
  const List = data?.map((item,index) => {
    
    return(
      <div className="Right-List" key={index}>
        <h3>{item.name}</h3>
        <ul>
      {item.Items.map((item,index) => {
        return(
          <li key={index}><a href="# " className={dir === "ltr" ? "left" : "right"}>{item.li}</a></li>
          )
        })}
        </ul>
      </div>
    )
  })


  return (
    <div className="Footer-right">
      {List}
    </div>
  )
} 

export default Footer_Right