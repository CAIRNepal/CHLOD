import React from "react";
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';
import { Header, NavBar, Footer } from "@civicactions/data-catalog-components";
import config from "../../assets/config.json";
import links from "../../assets/menu.json";
import './Layout.css';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

const Layout = ({
  children,
  title,
  description
}) => {
  return (
    <div className="App">
      <Helmet
        title={`${title} - NCHLOD`}
        description={description}
        defer={false}
        htmlAttributes={{
          "lang": "en"
        }}
      />

      <div className="headerNav">
        <Header site={config.site} slogan={config.slogan} logo={config.logo} customClasses={config.container} />

        <div className="button-container">
          <Link to="/login"><button className="custom-button" >Login</button></Link>
          <Link to="/signup"><button className="custom-button">Sign Up</button></Link>
          {/* <button className="custom-button">Log Out</button> */}
          <Link to="/profile">
            <Space direction="vertical" size={16}>
              <Space wrap size={16}>
                <Avatar size={40} icon={<UserOutlined />} />
              </Space>
            </Space>
          </Link>
        </div>
      </div>

      <NavBar
        navItems={links.main.map(item => (
          <Link to={item.url} className="nav-link" key={item.url}>
            {item.label}
          </Link>
        ))}
        customClasses={config.container}
      />

      <main className="main-content">
        {children}
      </main>

      <Footer links={links} customClasses={config.container} />
    </div>
  );
};

export default Layout;
