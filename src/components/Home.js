import React from 'react'
import Product from './Product'
import '../styles/Home.css'
import { Link } from 'react-router-dom'


const Home = () => {

    return (
        <div className='home'>
            <div className='home__container'>

                <img
                    className='home__image'
                    src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-6bababd9-ff42-407e-8e71-b6b0012e8def._CB417386616_QL85_V1_.jpg" alt="logo"
                />


                <div className="home__row">
                    <Product title="The Lean StartUp" price={29.99} rating={5} image="https://www.penguin.co.uk/content/dam/prh/books/109/1093443/9780091948993.jpg" />
                    <Product title="Born To Write" price={49.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71xoOPLEHxL.jpg" />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={4}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="4903850"
                        title="New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation) "
                        price={599.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
                    />

                </div>
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
