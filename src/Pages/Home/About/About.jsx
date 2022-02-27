import React from 'react'

const About = ({about}) => {
  const List = about?.map(item => {
    return(
      <div className='info' key={item.id}>
          <div className='About-img'>
            <img src={item.image} alt='' />
          </div>
        <div className='info-List'>
          <span>{item.discount}</span>
          <h3>{item.name}</h3>
        </div>
      </div>
    )
  })
  return (
    <div className='About'>
      <div className='About-List'>
        <div className='row'>
      {List}
        </div>
      </div>
    </div>
  )
}

export default About