import React from "react";
import config from "../../assets/config";
import Layout from "../../components/Layout";
import { Card, Button, Typography } from "antd";

const { Title, Text } = Typography;

const ApiDocsFull = () => (
  <Layout title="API Documentation">
    <div className={`dc-page ${config.container}`}>
      <div className="page-content">
        <Card
          bordered={false}
          style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}
          bodyStyle={{ padding: "24px" }}
        >
          <div style={{ textAlign: "center" }}>
            <Text strong style={{ fontSize: 18 }}>
              API docs will be available soon!
            </Text>
          </div>
        </Card>
      </div>
    </div>
  </Layout>
);

export default ApiDocsFull;
