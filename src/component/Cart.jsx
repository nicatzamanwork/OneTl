import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/action/index';
import { NavLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import barcode from "../assets/varcode.png";
import "../assets/Cart.css"
const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart); // Access the cart items from the updated handleCart state
  const dispatch = useDispatch();
  const [count,setCount] = useState(1)

  const handleIncrement=()=>(
    setCount(count + 1)
  )
  const handleDecrement=()=>{
    if (count > 1) {
      setCount(count - 1);
    }
  }
  
  


  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItemsList = Object.values(cartItems); // Convert the object values to an array

  const renderCartItems = () => {
    if (cartItemsList.length === 0) {
      return emptyCart();
    } else {
      return (
        <>
          {cartItemsList.map((cartItem) => (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
              <div className="container py-4">
                <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                  </div>
                  <div className="col-md-4">
                    <h3>{cartItem.title}</h3>
                    <p className="lead fw-bold">Bilet Fiyatı - ₺ 1</p>
                    <p className="lead fw-bold">Ürün fiyatı - ₺{cartItem.price}</p>
                    <p className='countText'>{count}</p>
                    <button className="button " onClick={handleIncrement}><AddIcon/></button>
                    <button className="button m-4" onClick={handleDecrement}><RemoveIcon/></button>

                    <img src={barcode} className='barcode'/>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {button()}
        </>
      );
    }
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">
            Biletleri Satın Al
          </NavLink>
        </div>
      </div>
    );
  };

  return <>{renderCartItems()}</>;
};

export default Cart;
