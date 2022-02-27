import React,{useMemo,useEffect} from 'react'

const Slide1 = ({Product}) => {
  const Items = [];
  const List =  Product?.map((item,index) => {
    return(
      <div key={index} className='slide-list'>
        <img src={item.image} alt='' />
      <div className='slide-info'>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </div>
      </div>
    )
  })

  for(let i=0; i < 4; i++) {
    if(List) {
      Items.push(List[i])
    }
  }

  return (
    <div className='slide1'>
      {Items.reverse()}
    </div>
  )
}

export default Slide1