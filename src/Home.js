import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://m.media-amazon.com/images/I/41FBwjCnS2L._SX1500_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id={"00001"}
                        title={'OnePlus Nord 2T 5G (Jade Fog, 8GB RAM, 128GB Storage)'}
                        price={28999}
                        image={"https://m.media-amazon.com/images/I/61ahn9N38zL._SX679_.jpg"}
                        rating={5}
                    />
                    <Product
                        id={"00002"}
                        title={'DEAL OF THE DAY boAt Newly Launched Airdopes Atom 81 True Wireless Earbuds with Upto 50H Playtime'}
                        price={1299}
                        image={"https://m.media-amazon.com/images/I/51NKpc-CnBL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"}
                        rating={4}
                    />

                </div>

                <div className="home__row">
                    <Product
                        id={"00010"}
                        title={'BOURNVITA Cadbury Chocolate Health Drink - Bournvita, 2 Kg'}
                        price={702}
                        image={"https://m.media-amazon.com/images/I/71oK4axCL2L._SX569_.jpg"}
                        rating={5}
                    />
                    <Product
                        id={"00011"}
                        title={'Baidyanath Chyawanprash Special - 950g |Immunity Booster | Enhances Strength & Stamina | Made with 52 ingredients | Fresh Stock'}
                        price={279}
                        image={"https://m.media-amazon.com/images/I/51uPN4ceFSL._SY450_.jpg"}
                        rating={5}
                    /><Product
                        id={"00012"}
                        title={'Pears Moisturising Bathing Bar Soap with Glycerine Pure & Gentle For Golden Glow 125g (Pack of 3)'}
                        price={192}
                        image={"https://m.media-amazon.com/images/I/519h3KwY5oL._SX569_.jpg"}
                        rating={5}
                    />

                </div>

                <div className="home__row">
                    <Product
                        id={"00020"}
                        title={'Sansui 140cm (55 inches) 4K Ultra HD Certified Android LED TV JSW55ASUHD (Mystique Black) With Dolby Audio and DTS'}
                        price={32990}
                        image={"https://m.media-amazon.com/images/I/81WFVSR-WLL._SX569_.jpg"}
                        rating={5}
                    />
                </div>

            </div>


        </div>
    );
}

export default Home;