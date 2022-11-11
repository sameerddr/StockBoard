import React from "react";
import { Layout } from "antd";
import "../Layout/StockLayout.css";
import Cards from '../Cards'

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
