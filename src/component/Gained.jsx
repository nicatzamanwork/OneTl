import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Products=()=>{
    const [data,setData]=useState([]);
    const [filter,setFilter]=useState(data);
    const [loading,setLoading]=useState(false);
    let componentMounted=true;

    useEffect(()=>{
        const getProducts = async ()=>{
         setLoading(true);
         const response=await fetch('https://fakestoreapi.com/products/');
         if(componentMounted){
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
            console.log(filter);
         }
       return ()=>{
        componentMounted=false;
       }
        }
        getProducts();
    },[]);
    const Loading=()=>{
        return(
            <>
              Loading...
            </>
        )
    };

    const filterProduct=(cat)=>{
        const updatedList = data.filter((x)=>x.category===cat);
        setFilter(updatedList);
    }
    const ShowProducts=()=>{
        return(
            <>
            <div className="row justify-content-center">
            {Array.isArray(filter) ? ( 
             filter.map((product) => {
              return (
            <>
             
              <div className="col-md-3 mb-4">
                <div className="card">
                 <img  src={product.image} alt={product.title} className="card-img-top" height='200px' width="20px"/>
                 <h5>{product.title.substring(0,12)}</h5>
                 <p className="card-text lead fw-bold">₺{product.price}</p>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <div>No products found.</div>
      )}</div>
      </>   
      );
      };
          
    return (
    <div>
        <div>
          <div className = "containermy-5py-5">
          <div className = "row">
          <div className = "col-12mb-5">
          <h1  className = "display-6 fw-bolder text-center"> Kazandığınız Ürünler </h1>
        </div>
              
     </div>
     </div>
                    
          
          <div className = "row justify-content-center">
            {loading ? <Loading/> :<ShowProducts/>}
          </div>
          </div>
          </div>
          
         )

}

export default Products;