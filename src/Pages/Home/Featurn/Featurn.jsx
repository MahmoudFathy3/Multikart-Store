import React,{useEffect} from 'react'

const Featurn = ({Featurn}) => {

  useEffect(() =>{
    document.querySelector('.Featurn').style = ` background-image: url(${Featurn && Featurn.image});
    background-size: cover; height: 700px;     object-fit: cover; background-repeat: no-repeat; 
    background-attachment: fixed;  background-position: center;`
  },[Featurn])

  return (
    <div className="Featurn">
      <div className="container">
          <div className="Featurn-info"> 
              <h3>{Featurn?.headering}</h3>
              <p>{Featurn?.discription}</p>
              <span>{Featurn?.discount}</span>
        </div>
      </div>
    </div>
  )
}

export default Featurn