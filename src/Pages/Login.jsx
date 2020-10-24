import React, {useContext, useState} from "react"
import {UserContext} from '../Context/Context'
import {Form, Input, Button, Layout} from 'antd';
import axios from "axios"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not a validate number!',
    email: 'The input is not valid E-mail!'
  }
};

const Login = () =>{
  const [user, setUser] = useContext(UserContext)

  const handleSubmit = values =>{
    axios.post("https://backendexample.sanbersy.com/api/user-login", {
      email: values.email, 
      password: values.password
    }).then(
      (res)=>{
        var user = res.data.user
        var token = res.data.token
        var currentUser = {name: user.name, email: user.email, token }
        setUser(currentUser)
        localStorage.setItem("user", JSON.stringify(currentUser))
      }
    ).catch((err)=>{
      alert(JSON.stringify(err.response.data))
    })
  }

  return(
    <Layout>
      <Form {...layout} style={{margin: '25px 0 100px 0'}} validateMessages={validateMessages} onFinish={handleSubmit}>
      <Form.Item name={'email'} label="Email" rules={[{required: true}, {type: 'email'}]}>
        <Input/>
      </Form.Item>
      <Form.Item name={'password'} label="Password" rules={[{required: true}]}>
        <Input.Password/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    </Layout>
  )
}

export default Login