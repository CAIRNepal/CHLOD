import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useLocation, Link } from 'react-router-dom'; // To track the current path
import config from "../../assets/config.json";  // Assuming config.json contains logo and other details

const { Header, Content, Footer, Sider } = Layout;

const menuItems = [
  { key: '1', icon: UserOutlined, label: 'Home', path: '/homelayout' },
  { key: '2', icon: VideoCameraOutlined, label: 'Feed', path: '/feed' },
  { key: '4', icon: UserOutlined, label: 'Diff Viewer', path: '/diffviewer' },
  { key: '5', icon: UploadOutlined, label: 'Version Tracker', path: '/version' },
  { key: '6', icon: VideoCameraOutlined, label: 'Submission Editor', path: '/suggestedit' },

];

const AppLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();

  // Get the current path to set the active menu item
  const currentPath = location.pathname;

  // Highlight the active item based on the current path
  const selectedKey = menuItems.find(item => item.path === currentPath)?.key;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => console.log(broken)}
        onCollapse={(collapsed, type) => console.log(collapsed, type)}
      >
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]} // Set the active item based on the current path
        >
          {menuItems.map(item => (
            <Menu.Item key={item.key} icon={React.createElement(item.icon)}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 12, background: colorBgContainer }}>
          {/* Logo Container */}
          <div className="logo-container" style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            <img
              src={config.logo} 
              alt="Logo"
              style={{ width: '200px', height: 'auto' }}  
            />
          </div>
        </Header>

        {/* Content Section */}
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 'calc(100vh - 134px)',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>

        {/* Footer Section */}
        <Footer style={{ textAlign: 'center' }}>
          CAIR-nepal ©{new Date().getFullYear()} Created by HeritageGraph Team
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
