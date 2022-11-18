import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

import { Bar } from "@ant-design/plots";

import "./Graph4.css";

const DemoArea = () => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(false);

  const GetApi = async () => {
    let api =
      "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=full&apikey=W9IPCZT6X76UJZOY";

    try {
      const response = await axios.get(api);
      let i = 0;
      let a = [];
      let data = response.data["Weekly Adjusted Time Series"];
      while (i < Object.keys(data).length) {
        if (i % 40 == 0) {
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
      setloader(true);
    } catch (error) {
      console.log("Error" + error);
    } finally {
      // setloader(false);
    }
  };

  useEffect(() => {
    GetApi();
  }, []);

  const config = {
    data,
    xField: "date",
    yField: "value",
    seriesField: "year",
    legend: {
      position: "top-left",
    },
  };
  return (
    <>
      {loader ? (
        <>
          <div className="graph4">
            <Bar {...config} />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default DemoArea;
