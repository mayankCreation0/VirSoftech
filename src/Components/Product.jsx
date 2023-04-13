import React, { useContext } from 'react'
import { context } from '../Context/Context'

const Product = () => {
    const data = [
        {
            "id": 1,
            "title": "Doge Coin",
            "image": "https://i.ibb.co/3SMLrjs/bitcoin.png",
            "price": 100
        },
        {
            "id": 2,
            "title": "Doge Coin",
            "image": "https://i.ibb.co/3SMLrjs/bitcoin.png",
            "price": 200
        },
        {
            "id": 3,
            "title": " Coin",
            "image": "https://i.ibb.co/ZMkV65r/ripple.png",
            "price": 50
        }
    ]
    const {updateCart,cart} = useContext(context)
    const handleUpdate = (product) =>{
        updateCart(product)
        console.log(product)
    }
    return (
        <div>
            <h2>Product</h2>
            <div style={{ display: 'flex', flexDirection: "row" }}>
                {
                    data.map((el) => (
                        <div key={el.id}>
                            <h1>{el.title}</h1>
                            <img src={el.image} alt={el.title} style={{ width: "100px" }} />
                            <h3>${el.price}</h3>
                            <button onClick={()=>handleUpdate(el)} disabled={cart.some((item)=>item.id === el.id)}>Buy</button>
                        </div>
                    ))
                }
            
            </div>
        </div>
    )
}

export default Product
