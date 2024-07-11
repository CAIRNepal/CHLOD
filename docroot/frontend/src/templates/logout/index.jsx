import React, { useState } from 'react';
import axios from 'axios';
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";

const LogoutPanel = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogout = async () => {
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('https://nchlod.ddev.site/user/logout?_format=json', {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setSuccess('Logout successful!');
      } else {
        setError('Logout failed.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Layout title="Logout">
      <div className={`dc-page ${config.container}`}>
        <h1>Logout</h1>
        <div className="dc-page-content row">
          <div className="col-md-9 col-sm-12">
            <button onClick={handleLogout} className="btn btn-primary">Logout</button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {success && <div className="alert alert-success mt-3">{success}</div>}
          </div>
          <div className="col-md-3 col-sm-12">
            <Announcement variation="info" heading="Note">
              <p>Click the button to logout.</p>
            </Announcement>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LogoutPanel;
