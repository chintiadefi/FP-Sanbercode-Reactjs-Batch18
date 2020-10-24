import React, {useContext, useState} from "react"
import {UserContext} from '../Context/Context'
import {Form, Input, Button} from 'antd';
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
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    }
  };

const Register = () =>{
  const [user, setUser] = useContext(UserContext)
  const [input, setInput] = useState({name: "", email: "" , password: ""})

  const handleSubmit = values => {
    axios.post("https://backendexample.sanbersy.com/api/register", {
      name: values.user.name, 
      email: values.user.email, 
      password: values.user.password
    }).then(
      (res)=>{
        var user = res.data.user
        var token = res.data.token
        var currentUser = {name: user.name, email: user.email, token }
        setUser(currentUser)
        localStorage.setItem("user", JSON.stringify(currentUser))
      }
    ).catch((err)=>{
      alert(err.response.data)
    })
  }

  const handleChange = (event) =>{
    let value = event.target.value
    let name = event.target.name
    console.log(event.target.value)
    switch (name){
      case "name":{
        setInput({...input, name: value})
        break;
      }
      case "email":{
        setInput({...input, email: value})
        break;
      }
      case "password":{
        setInput({...input, password: value})
        break;
      }
      default:{break;}
    }
  }

  return(
    <>
        <Form {...layout} style={{margin: '25px 0 100px 0'}} validateMessages={validateMessages} onFinish={handleSubmit}>
      <Form.Item name={['user', 'name']} label="Name" onChange={handleChange} rules={[{required: true}]}>
        <Input/>
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" onChange={handleChange} rules={[{required: true}, {type: 'email'}]}>
        <Input/>
      </Form.Item>
      <Form.Item name={['user', 'password']} label="Password" onChange={handleChange} rules={[{required: true}]}>
        <Input.Password/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default Register
