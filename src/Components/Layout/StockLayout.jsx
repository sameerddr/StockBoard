import { Layout } from "antd"

import React, {useState, useEffect, useContext} from "react";
import Cards from "../Cards/Cards";
import Graph4 from "../Graphs/Graph4";
import Graph2 from "../Graphs/Graph2";
import Graph3 from "../Graphs/Graph3";
import Graph5 from "../Graphs/Graph5";
import { TableComponent } from "../table/TableComponent";
import Dashboard from "../Dashboard/Dashboard";
import { Trade } from "../trade/Trade";

import "../Layout/StockLayout.css";

const { Header, Footer, Sider, Content } = Layout;
function StockLayout() {
  const TRTimg = 'https://seeklogo.com/images/T/TRT-logo-16A21F34B7-seeklogo.com.png'
  const RELimg = 'data:image/jpeg;base64,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'
  const IBMimg = 'data:image/png;base64,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'
  const TSCOimg = 'data:image/png;base64,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'
  return (
    <>
      <Layout>
        <Header className="layoutHeader">Header</Header>
        <Layout>
          <Sider width={400} className="slider">
              <Cards name={'TSCO'} graph={<Graph5/>} image={TSCOimg} price={'$55.10'} volume={'35539'} change={'0.17'}/>
              <Cards name={'IBM'} graph={<Graph2/>} image={IBMimg} price={'$48.22'} volume={'19235'} change={'0.24'}/>
              <Cards name={'Reliance'} graph={<Graph3/>} image={RELimg} price={'$122.02'} volume={'143295'} change={'0.43'}/>
              <Cards name={'TRT'} graph={<Graph4/>} image={TRTimg} price={'$95.00'} volume={'58531'} change={'0.36'}/>
          </Sider>
          <Content className="site-layout-content"><Dashboard/><TableComponent/></Content>
        </Layout>
      </Layout>
    </>
  );
}

export default StockLayout;
