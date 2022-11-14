import React from 'react';
import Graph3 from '../Graphs/Graph3';

import './Cards.css'

const Cards = (props) => {
    return (
        // <div className='card-container'>
        <>
            <div className='card'>
                <div className='stockdata'>
                    <img src={props.image} className='logo' />
                    <h1 className='heading'>{props.name}</h1>
                    <p className='percent'>{props.change}%</p>
                </div>
                <div className='flex'>
                    <div className='flex-column'>
                        <h1 className='heading1'>{props.price}</h1>
                        <h3 className='vol'>vol: {props.volume}</h3>
                    </div>
                {props.graph}
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
export default Cards