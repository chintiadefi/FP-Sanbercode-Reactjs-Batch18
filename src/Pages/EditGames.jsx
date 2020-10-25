import React, {useContext} from 'react'
import axios from 'axios'
import {GamesContext, UserContext} from '../Context/Context'
import {Link, useParams} from "react-router-dom";
import {Form, Input, InputNumber, Button, Radio, Layout} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import './Style.css'


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not a validate number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const EditGames = () => {
  const [games] = useContext(GamesContext)
  const [user] = useContext(UserContext)
    
  let { id } = useParams();
  const item = games.filter(item => item.id == id)

  const handleEdit = values => {
    axios.put(`https://backendexample.sanbersy.com/api/data-game/${values.id}`, {
      name: values.title, 
      genre: values.genre, 
      singlePlayer: values.singlePlayer == "1" ? true : false,
      multiplayer: values.multiplayer == "1" ? true : false,
      release: values.year,
      platform: values.platform,
      image_url: values.image},
      {headers: {"Authorization" : `Bearer ${user.token}`}})
    .then(done => {
      alert("Succesfull")
    })
    .catch((err)=>{
    alert(err)
  })
  }

  return (
    <Layout>
       <Link to='/listgames'><Button style={{margin: "10px 0 15px 25%"}} type="primary"><ArrowLeftOutlined/></Button></Link>
        <h1 className="title-container" style={{textAlign: "center"}}>Edit Data Games</h1>
    <Form {...layout}
    style={{margin: '25px 0 100px 0'}}
    validateMessages={validateMessages}
    onFinish={handleEdit}
    initialValues={{
      ['id']: item[0].id,
      ['title']: item[0].title,
      ['genre']: item[0].genre,
      ['singlePlayer']: item[0].singlePlayer == true ? "1" : 0,
      ['multiPlayer']: item[0].multiPlayer == true ? "1" : 0,
      ['year']: item[0].year,
      ['platform']: item[0].platform,
      ['image']: item[0].image,
    }}
    >
      <Form.Item name={'id'} label="ID" rules={[{ required: true }]}>
        <Input disabled/>
      </Form.Item>
      <Form.Item name={'title'} label="Title" rules={[{ required: true }]}>
        <Input/>
      </Form.Item>
      <Form.Item name={'genre'} label="Genre" rules={[{ required: true }]}>
        <Input/>
      </Form.Item>
      <Form.Item name="singlePlayer" label="Single Player" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="1">Yes</Radio>
          <Radio value="0">No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="multiPlayer" label="Multi Player" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="1">Yes</Radio>
          <Radio value="0">No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name={'year'} label="Released" rules={[{ type: 'number', min: 2000, max: 2020, required: true }]}>
        <InputNumber/>
      </Form.Item>
      <Form.Item name={'platform'} label="Platform" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={'image'} label="Image URL" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Save Edit
        </Button>
      </Form.Item>
    </Form>
    </Layout>
  );
};

export default EditGames
