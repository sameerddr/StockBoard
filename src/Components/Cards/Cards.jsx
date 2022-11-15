import React from 'react';

import './Cards.css'

const Cards = ({image, name, change, price, volume, graph}) => {
    return (
        // <div className='card-container'>
        <>
            <div className='card'>
                <div className='stockdata'>
                    <img src={image} className='logo' />
                    <h1 className='heading'>{name}</h1>
                    <p className='percent'>{change}%</p>
                </div>
                <div className='flex'>
                    <div className='flex-column'>
                        <h1 className='heading1'>{price}</h1>
                        <h3 className='vol'>vol: {volume}</h3>
                    </div>
                {graph}
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
export default Cards