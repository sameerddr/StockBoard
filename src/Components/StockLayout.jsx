import { Layout } from "antd";
import React from "react";
import Cards from "./Cards";
const { Header, Footer, Sider, Content } = Layout;

function StockLayout() {
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider><Cards/></Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default StockLayout;
