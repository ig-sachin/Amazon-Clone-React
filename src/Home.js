import React from 'react'
import './home.css'
import Product from './Product'
import { product1, product2, product3, product4, product5, product6 } from './data'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    {
                        product1.map((item) => (
                            <Product
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))
                    }
                </div>
                <div className="home__row">
                    {
                        product2.map((item) => (
                            <Product
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))
                    }
                </div>
                <div className="home__row">
                    {
                        product3.map((item) => (
                            <Product
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))
                    }
                </div>
                <div className="home__row">
                    {
                        product4.map((item) => (
                            <Product
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))
                    }
                </div>
                <div className="home__row">
                    {
                        product5.map((item) => (
                            <Product
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))
                    }
                </div>
                <div className="home__row">
                    {
                        product6.map((item) => (
                            <Product
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
