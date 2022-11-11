import { Layout } from "antd";

import React from "react";
import Cards from '../Cards'
import "../Layout/StockLayout.css";

const { Header, Footer, Sider, Content } = Layout;
function StockLayout() {
  return (
    <>
      <Layout>
        <Header className="layoutHeader">Header</Header>
        <Layout>
          <div className="slider">
            <Sider><Cards/></Sider>
          </div>
          <Content className="site-layout-content">Content</Content>
        </Layout>
      </Layout>
    </>
  );
}

export default StockLayout;
