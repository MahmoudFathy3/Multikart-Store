import React,{Fragment} from 'react';
import SlideShow from './SlideShow/SlideShow';
import {useSelector} from 'react-redux'
import About from './About/About';
import Product from './Product/Product';
import Featurn from './Featurn/Featurn';
import Section from './Section/Section';
import PeopleFamous from './Famous-People/People-Famous';

const Home = ({HandleCart,HandleShowProduct,isOpenModel}) => {
  const {products,isLoading} = useSelector(state => state.Products)

  return (
    <Fragment>
    {isLoading && <p>Loading...</p> }
      <SlideShow slideShow={products.slideShow}/>
      <About about={products.abouts}/>
      <Product Product={products.Products} heading={products.Heading_Products} HandleCart={HandleCart}
      HandleShowProduct={HandleShowProduct} isOpenModel={isOpenModel}/>
      <Featurn Featurn={products.Features}/>
      <Section Product={products.Products} dir={products.dir} 
      HandleShowProduct={HandleShowProduct} isOpenModel={isOpenModel} HandleCart={HandleCart}/>
      <PeopleFamous Famous={products.People_Famous} dir={products.dir}/>
    </Fragment>
  )
}

export default Home