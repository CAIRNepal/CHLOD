import React from "react";
import { Table } from "antd";
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";
import { version, dependencies } from '../../../package.json';

const Leaderboard = () => {
  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    }
  ];

  const data = [
    {
      key: '1',
      rank: '1',
      name: 'John Doe',
      score: 98,
    },
    {
      key: '2',
      rank: '2',
      name: 'Jane Smith',
      score: 95,
    },
    {
      key: '3',
      rank: '3',
      name: 'Alice Johnson',
      score: 92,
    }
  ];

  return (
    <Layout title="Leaderboard">
      <div className={`dc-page ${config.container}`}>
        <h1>Leaderboard</h1>
        <div className="dc-page-content row">
          <div className="col-md-9 col-sm-12">
            <p>Check out the top performers in our application.</p>
            <Table columns={columns} dataSource={data} pagination={false} />
          </div>
          <div className="col-md-3 col-sm-12">
            <Announcement variation="info" heading="Note">
              <p>This leaderboard displays the top scores achieved by users.</p>
            </Announcement>
          </div>
        </div>
        <h2>App version:</h2>
        <div className="dc-page-content row">
          <div className="col-12">
            <p>data-catalog-app: {version}</p>
            <p>data-catalog-components: {dependencies["@civicactions/data-catalog-components"]}</p>
          </div>  
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
