import './SingleProduct.css'
const SingleProduct = ({product}) => {
    console.log(product)
    const {id, name, imageurl,description, price, category, isfeature } = product
    return (
        <div className='card'>
            <img src={imageurl} alt="" />
        </div>
    );
};

export default SingleProduct;