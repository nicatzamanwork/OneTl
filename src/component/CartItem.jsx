import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { delItem, incrementItem, decrementItem } from '../redux/action/index';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import barcode from "../assets/varcode.png";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  const handleIncrement = () => {
    dispatch(incrementItem(item));
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      dispatch(decrementItem(item));
      setCount(count - 1);
    }
  };

  const handleClose = () => {
    dispatch(delItem(item));
  };

  return (
    <div className="px-4 my-5 bg-light rounded-3">
      <div className="container py-4">
        <button onClick={handleClose} className="btn-close float-end" aria-label="Close"></button>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={item.image} alt={item.title} height="200px" width="180px" />
          </div>
          <div className="col-md-4">
            <h3>{item.title}</h3>
            <p className="lead fw-bold">Bilet Fiyatı - ₺ 1</p>
            <p className="lead fw-bold">Ürün fiyatı - ₺{item.price}</p>
            <p className='countText'>{count}</p>
            <button className="button" onClick={handleIncrement}><AddIcon /></button>
            <button className="button m-4" onClick={handleDecrement}><RemoveIcon /></button>

            <img src={barcode} className='barcode' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
