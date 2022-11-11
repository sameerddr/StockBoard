import React from "react";
import { Layout } from "antd";
import "../Layout/StockLayout.css";

const { Header, Footer, Sider, Content } = Layout;
function StockLayout() {
  return (
    <>
      <Layout>
        <Header className="layoutHeader">Header</Header>
        <Layout>
          <Sider id="ant-layout-sider"></Sider>
          <Content className="site-layout-content">Content</Content>
        </Layout>
      </Layout>
    </>
  );
}

export default StockLayout;
