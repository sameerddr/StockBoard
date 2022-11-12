import React from 'react'
import { Table } from 'antd'
import { useState, useEffect } from 'react'
import axios from 'axios'

export function TableComponent() {
  const [url, setUrl] = useState('https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2018-03-12&to=2019-03-12&apikey=a3a0e9abc7f90ef141af43c5ff61df6a')
  const [data, setData] = useState([]);

  useEffect(()=>{
  axios
  .get(url)
  .then((response)=>{
    console.log(response.data['historical']);
    setData([...response.data['historical']])
  })
  .catch((err)=>{});
  },[])

  return (
    <>
    <Table
    dataSource={data}
    columns={[
      {
        title: 'Assets'
      },
      {
        title: 'High',
        dataIndex:'high'
      },
      {
        title: 'Low',
        dataIndex:'low'
      },
      {
        title:'Percentage',
        dataIndex:'changePercent'
      },
      {
        title: 'Open',
        dataIndex:'open'
      }
    ]}
    ></Table>

    {
      data.map((item)=>{
        console.log(item);
      })
    }
    </>
  )
}
