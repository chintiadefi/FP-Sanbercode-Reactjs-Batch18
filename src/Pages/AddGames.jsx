import React from 'react'
import {Link} from "react-router-dom";
import {Form, Input, InputNumber, Button, Switch} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import './Style.css'


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const AddGames = () => {

  return (
    <React.Fragment>
       <Link to='/listgames'><Button style={{margin: "10px 0 15px 25%"}} type="primary"><ArrowLeftOutlined/></Button></Link>
        <h1 className="title-container" style={{textAlign: "center"}}>List Games</h1>
    <Form {...layout} style={{margin: '25px 0 100px 0'}} name="add-games" validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Title" rules={[{ required: true }]}>
        <Input/>
      </Form.Item>
      <Form.Item name={['user', 'genre']} label="Genre" rules={[{ required: true }]}>
        <Input/>
      </Form.Item>
      <Form.Item name={['user', 'singlePlayer']} label="Single Player">
      <Switch defaultUnChecked />
      </Form.Item>
      <Form.Item name={['user', 'multiPlayer']} label="Multi Player">
      <Switch defaultUnChecked />
      </Form.Item>
      <Form.Item name={['user', 'released']} label="Released" rules={[{ type: 'number', min: 1980, max: 2020 }]} rules={[{ required: true }]}>
        <InputNumber/>
      </Form.Item>
      <Form.Item name={['user', 'platform']} label="Platform" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={['user', 'image']} label="Image URL" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </React.Fragment>
  );
};

export default AddGames
