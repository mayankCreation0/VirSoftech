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
        <div style={{ border: '1px solid black', padding: '10px' }}>
            <h2>Product</h2>
            <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                {
                    data.map((el) => (
                        <div key={el.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                            <h1 style={{ margin: 0 }}>{el.title}</h1>
                            <img src={el.image} alt={el.title} style={{ width: "100px", margin: '10px 0' }} />
                            <h3 style={{ margin: 0 }}>${el.price}</h3>
                            <button style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#008CBA', color: '#fff', border: 'none', marginTop: '10px' }}
                                onClick={() => handleUpdate(el)}
                                disabled={cart.some((item) => item.id === el.id)}>
                                {cart.some((item) => item.id === el.id) ? 'Added to Cart' : 'Buy'}
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Product
