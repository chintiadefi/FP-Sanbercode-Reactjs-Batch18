import React from 'react';
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import {SettingOutlined} from '@ant-design/icons';

class Sidebar extends React.Component {

  render() {
    return (
      <Menu
        style={{ width: 150, height: "100%", position: "absolute", margin: "65px 0 0 0"}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['1']}
        >
        <Menu.Item key="1"><Link to='/listgames'><SettingOutlined/> List Games</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/listmovies'><SettingOutlined/> List Movies</Link></Menu.Item>
      </Menu>
    );
  }
}

export default Sidebar