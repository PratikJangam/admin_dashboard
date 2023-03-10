import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import React from 'react';
import './widget.scss';
const Widget = ({ type }) => {
  // Temperory
  const amount = 100;
  const diff = 20;

  let data;

  switch (type) {
    case 'user':
      data = {
        title: 'USER',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlined
            className="icon"
            style={{ color: 'crimson', background: 'rgba(255, 0, 0, 0.2)' }}
          />
        ),
      };
      break;

    case 'order':
      data = {
        title: 'ORDER',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              color: 'goldenrod',
              background: 'rgba(218, 165, 32, 0.2)',
            }}
          />
        ),
      };
      break;

    case 'earning':
      data = {
        title: 'EARNING',
        isMoney: true,
        link: 'View net earning',
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ color: 'green', background: 'rgba(0, 128, 0, 0.2)' }}
          />
        ),
      };
      break;

    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{ color: 'purple', background: 'rgba(128, 0, 128, 0.2)' }}
          />
        ),
      };
      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney && '$'} {amount}
        </div>
        <div className="link">{data.link} </div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
