import { Layout } from "antd";
import React from "react";
const { Header, Footer, Sider, Content } = Layout;

function StockLayout() {
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default StockLayout;
