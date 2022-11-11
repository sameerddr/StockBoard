import { Card, Collapse } from 'antd';

import React from 'react';
import './Cards.css'
const Cards = () => {
    return (
        // <div className='card-container'>
        <>
            <Card
                title="TSLA"
                headStyle={{ color: "white" }}
                hoverable={true}
                bordered={false}
                style={{ backgroundColor: '#111827', width: "280px", height: "200px", borderRadius: '10px' }}
                extra={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8q0metut-4bQutjD3LQhql0bfSaXE_4ETJQ&usqp=CAU'
                    style={{ height: "50px", width: "50px", borderRadius: '50%' }} />}
            >
                <h3 style={{ color: "white", textAlign: "left" }}>price:<span style={{ color: "green", paddingLeft:"10px" }}>$296.00</span></h3>
            </Card>
            <Card
                title="AMD"
                headStyle={{ color: "white" }}
                hoverable={true}
                bordered={false}
                style={{ backgroundColor: '#111827', width: "280px", height: "200px", borderRadius: '10px' }}
                extra={<img src='https://pbs.twimg.com/profile_images/1145524454170062848/U4lxVYEw_400x400.png'
                    style={{ height: "50px", width: "50px", borderRadius: '50%' }} />}
            >
                <h3 style={{ color: "white", textAlign: "left" }}>price:<span style={{ color: "green", paddingLeft:"10px" }}> $64.32</span></h3>
            </Card>
        {/* </div> */}
        </>
    )
}
export default Cards