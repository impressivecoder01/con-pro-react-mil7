import About from '../About/About';
import Cart from '../Cart/Cart';
import './CardContainer.css'
const CardContainer = ({handleIsActiveState, isActive}) => {
    console.log(isActive)
    return (
        <div>
            <h1>Card container.jsx</h1>
            <div className='toggle flex'>
            <button className={`${isActive.cart? 'btns active': 'btns'}`} onClick={() => handleIsActiveState("cart")} >CART</button>
                <button className={`${isActive.cart?'btns ' : 'active btns'}`} onClick={()=> handleIsActiveState("about")} >About</button>
            </div>
            {isActive.cart? <Cart></Cart>: <About></About>}
        </div>
    );
};

export default CardContainer;