import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Line } from "@ant-design/plots";
import Loader from "./Loader";

import "./Graph2.css";

const DemoLine = () => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);

  const GetApi = async () => {
    let api =
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=SHOP.TRT&outputsize=full&apikey=W9IPCZT6X76UJZOY";

    setloader(true);
    try {
      const response = await axios.get(api);
      let i = 0;
      let a = [];
      let data = response.data["Time Series (Daily)"];
      while (i < Object.keys(data).length) {
        if (i % 500 == 0) {
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
    } catch (error) {
      console.log("Error" + error);
    } finally {
      setloader(false);
    }
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
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="graph2">
            <Line {...config} />
          </div>
        </>
      )}
    </>
  );
};

export default DemoLine;
