import React, {useContext} from "react"
import {UserContext} from '../Context/Context'
import {Form, Input, Button, Layout} from 'antd';
import axios from "axios"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  
  const validateMessages = {
    required: '${label} is required!',
  };

const Register = () =>{
  const [user, setUser] = useContext(UserContext)

  const handleSubmit = values => {
    axios.post("https://backendexample.sanbersy.com/api/change-password", {
        current_password: values.currentpassword,
        new_password: values.newpassword},
      {headers: {"Authorization" : `Bearer ${user.token}`}})
      .then(done => {
        alert("Succesfull")
      })
      .catch((err)=>{
      alert(err)
    })
  }

  return(
    <Layout>
      <Form {...layout} style={{margin: '25px 0 100px 0'}} validateMessages={validateMessages} onFinish={handleSubmit}>
      <Form.Item name={'currentpassword'} label="Current Password" rules={[{required: true}]}>
        <Input.Password/>
      </Form.Item>
      <Form.Item name={'newpassword'} label="New Password" rules={[{required: true}]}>
        <Input.Password/>
      </Form.Item>
      <Form.Item name={'confirmpassword'} label="Confirmation Password" dependencies={['newpassword']} hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Change Password
        </Button>
      </Form.Item>
    </Form>
    </Layout>
  )
}

export default Register
