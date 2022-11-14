import { Layout } from "antd";
import React from "react";

import Cards from '../Cards/Cards'
import { TableComponent } from "../table/TableComponent";

import "../Layout/StockLayout.css";

import Cards from "../Cards/Cards";
import Graph1 from "../Graphs/Graph1";
import Graph2 from "../Graphs/Graph2";
import Graph3 from "../Graphs/Graph3";

import "../Layout/StockLayout.css";

const { Header, Footer, Sider, Content } = Layout;
function StockLayout() {
  return (
    <>
      <Layout>
        <Header className="layoutHeader">Header</Header>
        <Layout>
            <Sider width={400} className="slider"><div className="card-container"><Cards/></div></Sider>
          <Content className="site-layout-content">
          <TableComponent/>
          </Content>
          <Sider width={400} className="slider">
            <div className="card-container">
              <Cards />
            </div>
          </Sider>
          {/* <Graph1 />
          <Graph2 />
          <Graph3 /> */}
          <Content className="site-layout-content"></Content>
        </Layout>
      </Layout>
    </>
  );
}

export default StockLayout;
