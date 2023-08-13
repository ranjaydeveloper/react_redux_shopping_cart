import React from 'react'
import Products from './Products'
import data from './productsdata.json'



const Home = () => {
  
  return (
    <>
        <Products pData={data} />
    </>
  )
}

export default Home