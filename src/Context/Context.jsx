import { createContext, useState } from "react";

export const context = createContext();

const AppContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const updateCart = (product) => {
        setCart([...cart, { ...product, quantity: 1 }])
    }
    const updateQuantity = (productId, newQuantity) => {
        const index = cart.findIndex((el) => el.id === productId)
        const newCart = [...cart];
        newCart[index].quantity = newQuantity;
        setCart(newCart);
    }
    console.log(cart)
    return (
        <context.Provider value={{ cart, updateCart,updateQuantity }}>
            {children}
        </context.Provider>
    )
}
export default AppContext