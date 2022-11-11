import { Layout } from "antd";

import React from "react";
import Cards from '../Cards/Cards'
import "../Layout/StockLayout.css";

const { Header, Footer, Sider, Content } = Layout;
function StockLayout() {
  return (
    <>
      <Layout>
        <Header className="layoutHeader">Header</Header>
        <Layout>
            <Sider width={400} className="slider"><Cards/></Sider>
          <Content className="site-layout-content">Content</Content>
        </Layout>
      </Layout>
    </>
  );
}

export default StockLayout;
