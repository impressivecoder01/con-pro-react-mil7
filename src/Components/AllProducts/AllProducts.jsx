import { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'
const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("blog.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products)
    return (
        <div>
            <h1>All Product</h1>
            {
                products.map(product=> <SingleProduct product={product}></SingleProduct>)
            }
        </div>
    );
};

export default AllProducts;