import React from "react";
import Helmet from "react-helmet";
import { Link, useNavigate } from 'react-router-dom';
// import { Header, NavBar, Footer} from "@civicactions/data-catalog-components";
import { Header, NavBar, Footer} from "./datacomponent"
import config from "../../assets/config.json";
import links from "../../assets/menu.json";
import './Layout.css';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Button } from 'antd';

import React from 'react';
import { createRoot } from "react-dom/client";
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/queryClient';
import '@civicactions/data-catalog-components/dist/index.css';
import './theme/index.css';

import Home from './templates/home';
import About from './templates/about';
import SearchTemplate from './templates/search';
import ApiDocsFull from './templates/api';
import NotFound from './templates/not_found';
import Dataset from './templates/dataset';
import ApiDocsSpecific from './templates/dataset/api';
import Publishers from './templates/publishers';
import Form from './templates/form';
import Curation from './templates/curation';
import Activity from './templates/activity';
import Queues from './templates/queues';
import WebformSubmissions from './templates/test';
import Leaderboard from './templates/leaderboard';
import LoginPanel from './templates/loginPanel';
import SignupPanel from './templates/signupPanel';
import LogoutPanel from './templates/logout';
import Moderator from './templates/moderator';
import Profile from './templates/profile';
import Viewresponse from './templates/viewResponse';
import ViewProfile from './templates/viewprofile';
import ViewForm from './templates/viewform';
import ViewProfileOrForm from './templates/viewprofile';

import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n"; // Import translation config

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
      <label>{t("language")}: </label>
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="ne">नेपाली</option>
      </select>
      <button>{t("button")}</button>
    </div>
  );
}

export default App;



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Navigate replace to="/" />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/publishers",
    element: <Publishers />
  },
  {
    path: "/search",
    element: <SearchTemplate />
  },
  {
    path: "/api",
    element: <ApiDocsFull />
  },
  {
    path: "/dataset/:id",
    element: <Dataset />
  },
  {
    path: "/dataset/:id/api",
    element: <ApiDocsSpecific />
  },
  {
    path: "/datacontribution",
    element: <Form />
  },
  {
    path: "/curation",
    element: <Curation />
  },
  {
    path: "/curation/activity",
    element: <Activity/>
  },
  {
    path: "/curation/queues",
    element: <Queues/>
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />
  },
  {
    path: "/test",
    element: <WebformSubmissions />
  },
  {
    path: "/login",
    element: <LoginPanel />
  },
  {
    path: "/signup",
    element: <SignupPanel />
  },
  {
    path: "/moderator",
    element: <Moderator/>
  },

  {
    path: "/logout",
    element: <LogoutPanel />
  },
  {
    path: "/viewresponse/:id",
    element: <Viewresponse />
  },
  {
    path: "/me",
    element: <Profile />
  },

  {
    path: '*',
    element: <NotFound />,
  },
  {
    path:'/view/:username',
    element: <ViewProfileOrForm />
  },
  {
    path:'/viewform/:title',
    element: <ViewProfileOrForm  />
  }
]);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);



const Layout = ({
  children,
  title,
  description
}) => {
  const navigate = useNavigate();

  // Check if user is logged in by looking for a token in localStorage
  const token = localStorage.getItem('accessToken');

  // Handle logout
  const handleLogout = () => {
    // Remove the access token from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken'); // Optionally remove refresh token

    // Redirect to login page
    navigate('/login');
  };

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
          {/* Show Login and Sign Up buttons only if user is not logged in */}
          {!token ? (
            <>
              <Link to="/login">
                <Button className="custom-button" type="primary">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="custom-button" type="default">
                  Sign Up
                </Button>
              </Link>
            </>
          ) : (
            <>
              {/* Show Profile and Logout if the user is logged in */}
              <Link to="/me">
                <Space direction="vertical" size={16}>
                  <Space wrap size={16}>
                    <Avatar size={40} icon={<UserOutlined />} />
                  </Space>
                </Space>
              </Link>
              <Button
                type="primary"
                onClick={handleLogout}
                className="custom-button mt-2"
              >
                Logout
              </Button>
            </>
          )}
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
