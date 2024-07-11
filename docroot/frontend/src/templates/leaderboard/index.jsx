import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";
import { version, dependencies } from '../../../package.json';

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Display Name',
      dataIndex: 'display_name',
      key: 'display_name',
    },
    {
      title: 'Username',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'mail',
      key: 'mail',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (status ? 'Active' : 'Inactive')
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://nchlod.ddev.site/jsonapi/user/user');
        const users = response.data.data.map(user => ({
          key: user.id,
          id: user.id,
          display_name: user.attributes.display_name,
          name: user.attributes.name,
          mail: user.attributes.mail,
          status: user.attributes.status,
          created: user.attributes.created
        }));
        setUserData(users);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout title="User Table">
      <div className={`dc-page ${config.container}`}>
        <h1>User Table</h1>
        <div className="dc-page-content row">
          <div className="col-md-9 col-sm-12">
            <p>List of registered users.</p>
            <Table columns={columns} dataSource={userData} loading={loading} pagination={false} />
          </div>
          <div className="col-md-3 col-sm-12">
            <Announcement variation="info" heading="Note">
              <p>This table displays the details of the registered users.</p>
            </Announcement>
          </div>
        </div>

        <div className="dc-page-content row">

        </div>
      </div>
    </Layout>
  );
};

export default UserTable;
