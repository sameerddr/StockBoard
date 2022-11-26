import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { Column } from "@ant-design/plots";
import Loader from "./Loader";

import "./Graph1.css";

function Graph1() {
  const [data, setdata] = useState([]);
  const [loader, setLoader] = useState(true);

  const GetApi = async () => {
    let api =
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=W9IPCZT6X76UJZOY";
    setLoader(true);

    try {
      const response = await axios.get(api);
      let i = 0;
      let a = [];
      let data = response.data["Time Series (Daily)"];
      while (i < Object.keys(data).length) {
        if (i % 1200 == 0) {
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
      setLoader(false);
    }
  };
  useEffect(() => {
    GetApi();
  }, []);

  const config = {
    data,
    isStack: true,
    xField: "date",
    yField: "value",
    seriesField: "type",
    label: {
      position: "middle",
      layout: [
        {
          type: "interval-adjust-position",
        },
        {
          type: "interval-hide-overlap",
        },
        {
          type: "adjust-color",
        },
      ],
    },
  };
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="graph1">
            <Column {...config} />;
          </div>
        </>
      )}
    </>
  );
}

export default Graph1;
