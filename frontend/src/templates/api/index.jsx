import React from "react";
import config from "../../assets/config";
import Layout from "../../components/Layout";
import { ApiDocs } from "@civicactions/data-catalog-components";

// Use Vite's environment variable for the backend API URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const ApiDocsFull = () => (
  <Layout title="API Documentation">
    <div className={`dc-page ${config.container}`}>
      <div className="page-content">
        {typeof window !== "undefined" && (
          <ApiDocs endpoint={`${API_BASE_URL}/openapi.json/`} />
        )}
      </div>
    </div>
  </Layout>
);

export default ApiDocsFull;
