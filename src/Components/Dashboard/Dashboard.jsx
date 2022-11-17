import React from 'react'
import { Progress } from 'antd';
import Statistics from './Statistics';

import Graph1 from '../Graphs/Graph1'

import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='main-cont'>
            <div className='progress-bar'>
                <Progress strokeLinecap="butt" type="dashboard" percent={75}/>
                <Statistics/>
            </div>
            <div>
                <Graph1/>
            </div>
        </div>
    )
}

export default Dashboard
