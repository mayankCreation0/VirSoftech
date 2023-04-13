import React, { useContext } from 'react'
import { context } from '../Context/Context'
import '../Styles/cart.css';
const CartPage = () => {
    const { cart, updateQuantity } = useContext(context);
    const incCount = (productId, currentQuantity) => {
        const newQuantity = currentQuantity + 1;
        updateQuantity(productId, newQuantity)
    }
    const decCount = (productId, currentQuantity) => {
        if(currentQuantity>1)
        {const newQuantity = currentQuantity - 1;
        updateQuantity(productId, newQuantity)}
    }
    const total = () => {
        return cart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0)
    }
    console.log(cart)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,border:'1px solid red',width:'50%',height:'600px'}}>
            <h1>Cart</h1>
            {cart.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((el) => (
                            <tr key={el.id}>
                                <td>
                                    <h4>{el.title}</h4>
                                    <img src={el.image} alt={el.title} style={{ width: "50px" }} />
                                </td>
                                <td>
                                    <div>
                                        <button onClick={() => decCount(el.id, el.quantity)}>-</button>
                                        <span>{el.quantity}</span>
                                        <button onClick={() => incCount(el.id, el.quantity)}>+</button>
                                    </div>
                                </td>
                                <td>{el.quantity * el.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                "no data found"
            )}
            <h1>Grandtotal: {total()}</h1>
        </div>

    )
}
export default CartPage
