import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Logo from '../Image/logo.png'
import {UserContext} from '../Context/Context'
import {Layout, Menu, Button} from 'antd';

const {Header} = Layout;

function Headers() {

  const [user] = useContext(UserContext);

    return(
        <Layout>
        <Header>
        <Menu theme="dark" mode="horizontal">
        <img style={{height: "50px"}} src={Logo} alt="Logo"/>
          <Menu.Item key="1"><Link to='/'>Games</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/movies'>Movies</Link></Menu.Item>
          {user && 
          (
              <>
              <Menu.Item style={{marginLeft: '20px'}} key="3"><Link to='/listgames'>List Games</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/listmovies'>List Movies</Link></Menu.Item>
              </>
            )
          }
          {user === null && 
            (
              <>
          <Button style={{float: "right", margin: "15px 10px 15px 0"}} type="primary"><Link to='/register'>Register</Link></Button>
          <Button style={{float: "right", margin: "15px 10px 15px 0"}} type="primary">Login</Button>
              </>
            )
          }
        </Menu>
      </Header>
    </Layout>
    );
}

export default Headers