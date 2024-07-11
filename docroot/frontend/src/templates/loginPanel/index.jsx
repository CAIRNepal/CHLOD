import React, { useState } from 'react';
import axios from 'axios';
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";

const LoginPanel = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [userData, setUserData] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const payload = {
      name: username,
      pass: password,
    };

    try {
      const response = await axios.post('https://nchlod.ddev.site/user/login?_format=json', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setSuccess('Login successful!');
        setUserData(response.data);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Layout title="Login">
      <div className={`dc-page ${config.container}`}>
        <h1>Login</h1>
        <div className="dc-page-content row">
          <div className="col-md-9 col-sm-12">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {success && <div className="alert alert-success mt-3">{success}</div>}
            {userData && (
              <div className="mt-3">
                <h3>User Data</h3>
                <pre>{JSON.stringify(userData, null, 2)}</pre>
              </div>
            )}
          </div>
          <div className="col-md-3 col-sm-12">
            <Announcement variation="info" heading="Note">
              <p>Enter your credentials to login.</p>
            </Announcement>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPanel;
