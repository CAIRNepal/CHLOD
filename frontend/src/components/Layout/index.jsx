import React from "react";
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';
import { Header, NavBar, Footer } from "./datacomponent";
import config from "../../assets/config.json";
import links from "../../assets/menu.json";
import './Layout.css';

const Layout = ({ children, title, description }) => {
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
