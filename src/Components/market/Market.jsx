import React, { useEffect, useContext } from "react";
import { Table } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import column from "./TableComponentStaticDatas";
import { MainContext } from "../../context/MainContext";

import "react-toastify/dist/ReactToastify.css";


export function Market() {
  const { url, rateData, setRateData, search } = useContext(MainContext);

  const flattenObj = (ob) => {
    let arr = [];
    for (const i in ob) {
      arr.push(ob[i]);
    }
    const fiteredvalue = arr.filter((coin) => {
      if (coin.name.toLowerCase().includes(search)) return coin;
    });
    setRateData(fiteredvalue);
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
  }, [search]);

  return (
    <>
      <Table
        className="rate_table"
        dataSource={rateData}
        columns={column}
      ></Table>
      <ToastContainer />
    </>
  );
}
