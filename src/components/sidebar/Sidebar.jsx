import React, { useContext } from 'react';
import './sidebar.scss';

import {
  AccountCircleOutlined,
  CreditCard,
  Dashboard,
  HealthAndSafetyOutlined,
  InfoOutlined,
  InsertChart,
  LocalShippingOutlined,
  LogoutOutlined,
  NotificationsNoneOutlined,
  PersonOutlineOutlined,
  SettingsSuggestOutlined,
  Store,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { UseDarkModeContext } from '../../context/UseDarkModeContext';
const Sidebar = () => {
  const { dispatch } = useContext(UseDarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <Dashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineOutlined className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <Store className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <CreditCard className="icon" />
            <span>Orders</span>
          </li>

          <li>
            <LocalShippingOutlined className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsNoneOutlined className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyOutlined className="icon" />
            <span>System Health</span>
          </li>

          <li>
            <InfoOutlined className="icon" />
            <span>Logs</span>
          </li>

          <li>
            <SettingsSuggestOutlined className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutOutlined className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
