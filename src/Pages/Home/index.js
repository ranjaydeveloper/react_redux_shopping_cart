import React from 'react'
import Products from './Products'
import data from './productsdata.json'
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  
  return (
    <>
        <Products pData={data} />
    </>
  )
}

export default Home