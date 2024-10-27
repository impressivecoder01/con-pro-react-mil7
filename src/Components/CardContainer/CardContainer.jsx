import './CardContainer.css'
const CardContainer = () => {
    return (
        <div>
            <h1>Card container.jsx</h1>
            <div className='toggle flex'>
                <div className='cart-btn btn'>CART</div>
                <div className='about btn'>About</div>
            </div>
        </div>
    );
};

export default CardContainer;