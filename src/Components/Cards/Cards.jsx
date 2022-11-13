import React from 'react';
import './Cards.css'

const Cards = () => {
    return (
        // <div className='card-container'>
        <>
            <div className='card'>
                <div className='stockdata'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8q0metut-4bQutjD3LQhql0bfSaXE_4ETJQ&usqp=CAU' className='logo' />
                    <h1 className='heading'>TSLA</h1>
                    <p className='percent'>0.25%</p>
                </div>
                <h1 className='heading1'>0.0009812345</h1>
                <h3 className='vol'>22,143</h3>
            </div>
            {/* </div> */}
        </>
    )
}
export default Cards