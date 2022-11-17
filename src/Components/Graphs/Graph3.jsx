import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Area } from "@ant-design/plots";
import { Oval } from 'react-loader-spinner'

import "./Graph3.css";

const DemoArea = () => {
  const [data, setdata] = useState([]);

  const GetApi = async () => {
    let api =
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=RELIANCE.BSE&outputsize=full&apikey=W9IPCZT6X76UJZOY";

    const response = await axios.get(api);
    // console.log(response);
    let i = 0;
    let a = [];
    let data = response.data["Time Series (Daily)"];
    while (i < Object.keys(data).length) {
      if (i % 400 == 0) {
        a.push({
          value: data[Object.keys(data)[i]]["3. low"],
          type: "low",
          date: Object.keys(data)[i],
        });
        a.push({
          value: data[Object.keys(data)[i]]["2. high"],
          type: "high",
          date: Object.keys(data)[i],
        });
      }
      i++;
    }
    // console.log(a);
    setdata(a);
  };

  useEffect(() => {
    GetApi();
  }, []);

  const config = {
    data,
    xField: "date",
    yField: "value",
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
      };
    },
  };

  return (
    <div className="graph3">
      <Area {...config} />
    </div>
  );
};

export default DemoArea;
