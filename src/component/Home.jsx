import React from 'react'
import Products from './Products'
import ferrari from "../assets/ferraricar.jpg"
import "../assets/Home.css"
export default function Home() {
  return (
    <div className='Homie'>
      <div>
        <h1 className="bannertext">100001-ci uduşa özel</h1>
        <img className="col-lg-12 mb-4" height="900px" src={ferrari}/>
      </div>
      <Products/>
    </div>
  )
}
