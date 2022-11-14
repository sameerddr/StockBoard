import { Layout } from "antd";
import React from "react";

import Cards from '../Cards/Cards'
import { TableComponent } from "../table/TableComponent";

import "../Layout/StockLayout.css";
import '../Cards/Cards.css'

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
        </Layout>
      </Layout>
    </>
  );
}

export default StockLayout;
