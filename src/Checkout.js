import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (

        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/onsite/Apr18/PeX_1500x200._CB1198675309_.jpg" alt="" />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout__title'>
                        Your Shopping Basket</h2>
                    {basket.map(item => (

                        < CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    {/* BasketItem */}
                </div>

            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout