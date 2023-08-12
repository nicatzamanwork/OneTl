import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector} from "react-redux"

export default function Navbar() {
  const state =useSelector((state)=>state.handleCart)
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>  
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active navbartext" aria-current="page" to="/">Ana Sayfa</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link navbartext" to="/products">Ürünler</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link navbartext" to="/kazandıklarım">Kazandıklarım</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link navbartext" to="/cart">Sepetim</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink className="nav-link navbartext" to="/login">Giriş</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink className="nav-link navbartext" to="/signup">Kayıt</NavLink>
          </li> 
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Ara" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Ara</button>
        </form>
     
      </div>
    </div>
  </nav></div>
  )
}
