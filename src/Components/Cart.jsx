import React, { useContext } from 'react'
import { context } from '../Context/Context'

const CartPage = () => {
    const { cart, updateQuantity } = useContext(context);
    const incCount = (productId, currentQuantity) => {
        const newQuantity = currentQuantity + 1;
        updateQuantity(productId, newQuantity)
    }
    const decCount = (productId, currentQuantity) => {
        const newQuantity = currentQuantity - 1;
        updateQuantity(productId, newQuantity)
    }
    const total = () => {
        return cart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0)
    }
    console.log(cart)
    return (
        <div style={{ display: 'flex' }}>
            <h1>Cart</h1>
            {cart.length > 0 ?
                cart.map((el) => (
                    <div style={{ display: 'flex',flexDirection:'column' }}>
                        <h4>{el.title}</h4>
                        <img src={el.image} alt={el.title} style={{ width: "100px" }} />
                        <div>
                            <button onClick={() => decCount(el.id, el.quantity)}>-</button>
                            <button >{el.quantity}</button>
                            <button onClick={() => incCount(el.id, el.quantity)}>+</button>
                        </div>
                        <h2>Price:{el.quantity * el.price}</h2>
                    </div>
                )) : "no data found"
            }
            <h1>Grandtotal : {total()}</h1>
        </div>
    )
}
export default CartPage
