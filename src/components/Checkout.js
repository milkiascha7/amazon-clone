import React from 'react'
import '../styles/Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    return (
        <div className='check'>
            <div className='checkout'>
                <div className='checkout__left'>
                    <img
                        className='checkout__ad'
                        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                        alt="ad_logo"
                    />
                    <div >
                        <h3>Hello, {user?.email}</h3>
                        <h2 className='checkout__title'>Your Shopping basket</h2>
                    </div>
                </div>

                <div className='checkout__right'>
                    <Subtotal />
                    <h2>Your subtotal is</h2>


                </div>
            </div>
            {basket.map((item) => (
                <CheckoutProduct id={item.id} price={item.price} title={item.title} image={item.image} rating={item.rating} />
            ))}
        </div>
    )
}

export default Checkout
