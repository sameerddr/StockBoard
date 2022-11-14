import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Line } from "@ant-design/plots";

import "./Graph2.css";
export const Graphdata2 = createContext()

const DemoLine = () => {
  const [data, setdata] = useState([]);

  const GetApi = async () => {
    let api =
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=SHOP.TRT&outputsize=full&apikey=W9IPCZT6X76UJZOY";

    const response = await axios.get(api);
    // console.log(response);
    let i = 0;
    let a = [];
    let data = response.data["Time Series (Daily)"];
    while (i < Object.keys(data).length) {
      if (i % 200 == 0) {
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
    setdata(a);
  };

  useEffect(() => {
    GetApi();
  }, []);

  const config = {
    data,
    padding: "auto",
    xField: "date",
    yField: "value",
    xAxis: {
      tickCount: 5,
    },
    smooth: true,
  };

  return (
    <Graphdata2.Provider value={[data, setdata]}>
    <div className="graph2">
      <Line {...config} />
    </div>
    </Graphdata2.Provider>
  );
};

export default DemoLine;