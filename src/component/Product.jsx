import React , { useState , useEffect } from 'react' ;
import { NavLink, useParams } from 'react-router-dom' ;
import {useDispatch} from "react-redux";
import {addItem} from "../redux/action/index";
import gif from "../assets/gif.gif"
const Product = ( ) => {
    const { id } = useParams ( ) ;
    const [ product , setProduct ] = useState ( [ ] ) ;
    const [ loading , setLoading ] = useState ( false ) ;
   
    const dispatch = useDispatch();
    const addProduct =(product)=>{
        console.log(product)
        dispatch(addItem(product));
    }
   
   
   
   
    useEffect (()=> {
        const getProduct = async ()=> {
            setLoading (true) ;
            const response = await fetch (`https://fakestoreapi.com/products/${id}`); 
            setProduct(await response.json());
            setLoading(false)
        }
        getProduct();
    }, [id]);
    const Loading=()=>{
        return(
            <>
              Loading...
            </>
        )
    }

    const ShowProduct=()=>{
        return(
            <>
            <div className='col-md-6'>
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
            </div>
            <div className='col-md-6 cercive'>
                <div height="400px" width="400px">
                    <h2 className='cekilis'>Çekiliş Sonuçları:</h2>
                    <img src={gif} width="450px"/>
                </div>
            </div>

            <div className='col-md-12'>
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <h3 className='display-6 fw-bold my-4'>
                    ${product.price}
                </h3>
                <p className='lead'>{product.description}</p>
                <button className='btn btn-outline-dark' onClick={()=>addProduct(product)}>
                    Sepete Ekle
                </button>
                <NavLink to="/cart" className="btn btn-dark" style={{marginLeft:"20px"}}>
                    Sepete Git
                </NavLink>
                
            </div>
            </>
        )
    }
    return(
        <div>
            <div className='container'>
                <div className='row'>
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    )
}
    export default Product
