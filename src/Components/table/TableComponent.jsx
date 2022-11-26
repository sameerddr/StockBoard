import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import column from "./TableComponentStaticDatas";

import "react-toastify/dist/ReactToastify.css";
import "./Table.css";

export function TableComponent() {
  const [url, setUrl] = useState(
    "https://api.coingecko.com/api/v3/exchange_rates"
  );
  const [rateData, setRateData] = useState([]);

  const flattenObj = (ob) => {
    let arr = [];
    for (const i in ob) {
      arr.push(ob[i]);
    }
    setRateData(arr);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        flattenObj(response.data.rates);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  return (
    <>
      <Table
        className="rate_table"
        dataSource={rateData}
        columns={column}></Table>
      <ToastContainer />
    </>
  );
}
