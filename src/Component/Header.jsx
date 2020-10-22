import React from 'react'
import {Link} from "react-router-dom";
import Logo from '../Image/logo.png'
import {Layout, Menu, Button} from 'antd';

const {Header} = Layout;

function Headers() {
    return(
        <Layout>
        <Header>
        <Menu theme="dark" mode="horizontal">
        <img style={{height: "50px"}} src={Logo} alt="Logo"/>
          <Menu.Item key="1"><Link to='/'>Games</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/movies'>Movies</Link></Menu.Item>
          <Button style={{float: "right", margin: "15px 10px 15px 0"}} type="primary">Register</Button>
          <Button style={{float: "right", margin: "15px 10px 15px 0"}} type="primary">Login</Button>
        </Menu>
      </Header>
      </Layout>
    );
}

export default Headers