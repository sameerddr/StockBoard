import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "@ant-design/plots";

const DemoArea = () => {
  const [data, setdata] = useState([]);

  const GetApi = async () => {
    let api =
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=600104.SHH&outputsize=full&apikey=W9IPCZT6X76UJZOY";

    const response = await axios.get(api);
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
    legend: false,
    seriesField: "key",
    stepType: "hvh",
  };
  return (
    <>
      <div className="graph4">
        <Line
          style={{
            Color: "blue",
            width: "100%",
            height: "600px",
            backgroundColor: "pink",
          }}
          {...config}
        />
      </div>
    </>
  );
};

export default DemoArea;
