import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Logo from '../Image/logo.png'
import {UserContext} from '../Context/Context'
import {Layout, Menu, Button, message, Dropdown} from 'antd';
import {DownOutlined, UserOutlined, SettingOutlined, LogoutOutlined} from '@ant-design/icons';
import Sidebar from './Sidebar'

const {Header} = Layout;

function Headers() {

  const [user, setUser] = useContext(UserContext);

  const handleLogout = () =>{
    setUser(null)
    localStorage.removeItem("user")
    message.info("You're logout");
  }
  
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<SettingOutlined/>}>
        <Link to='/changepassword'>Change Password</Link>
      </Menu.Item>
      <Menu.Item key="2" onClick={handleLogout} icon={<LogoutOutlined/>}>
        Logout
      </Menu.Item>
    </Menu>
  );

    return(
        <Layout>
        <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} defaultOpenKeys={['1']}>
        <img style={{height: "50px"}} src={Logo} alt="Logo"/>
          <Menu.Item key="1"><Link to='/'>Games</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/movies'>Movies</Link></Menu.Item>
          {user && 
          (
              <>
              <Dropdown overlay={menu}>
              <Button style={{float: "right", margin: "15px 10px 15px 0"}} type="link"><UserOutlined/> Welcome! {(user.name).split(" ", 1)} <DownOutlined/></Button>
              </Dropdown>
              </>
            )
          }
          {user === null && 
            (
              <>
          <Button style={{float: "right", margin: "15px 10px 15px 0"}} type="primary"><Link to='/register'>Register</Link></Button>
          <Button style={{float: "right", margin: "15px 10px 15px 0"}} type="primary"><Link to='/login'>Login</Link></Button>
              </>
            )
          }
        </Menu>
      </Header>
      {user && 
          (
            <Sidebar/>
            )
          }
    </Layout>
    );
}

export default Headers