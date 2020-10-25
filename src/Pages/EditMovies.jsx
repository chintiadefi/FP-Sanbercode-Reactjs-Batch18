import React, {useContext, useState} from 'react'
import axios from 'axios'
import {MoviesContext, UserContext} from '../Context/Context'
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


const AddGames = () => {
  const [movies] = useContext(MoviesContext)
  const [user] = useContext(UserContext)

  let { id } = useParams();
  const item = movies.filter(item => item.id == id)

  const handleEdit = values => {
    axios.put(`https://backendexample.sanbersy.com/api/data-movie/${values.id}`, {
        title: values.title, 
        genre: values.genre, 
        duration: values.duration,
        rating: values.rating,
        year: values.year,
        description: values.description,
        review: values.review,
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
       <Link to='/listmovies'><Button style={{margin: "10px 0 15px 25%"}} type="primary"><ArrowLeftOutlined/></Button></Link>
        <h1 className="title-container" style={{textAlign: "center"}}>Edit Data Movies</h1>
    <Form {...layout}
    style={{margin: '25px 0 100px 0'}}
    validateMessages={validateMessages}
    onFinish={handleEdit}
    initialValues={{
    ['id']: item[0].id,
    ['title']: item[0].title,
    ['genre']: item[0].genre,
    ['duration']: item[0].duration,
    ['rating']: item[0].rating,
    ['year']: item[0].year,
    ['description']: item[0].description,
    ['review']: item[0].review,
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
      <Form.Item name={'duration'} label="Duration (minutes)" rules={[{ type: 'number', min: 0, required: true }]}>
        <InputNumber/>
      </Form.Item>
      <Form.Item name={'rating'} label="Rating" rules={[{ type: 'number', min: 0, max: 10}]}>
        <InputNumber/>
      </Form.Item>
      <Form.Item name={'year'} label="Year" rules={[{ type: 'number', min: 1900, max: 2020, required: true }]}>
        <InputNumber/>
      </Form.Item>
      <Form.Item name={'description'} label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={'review'} label="Review">
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

export default AddGames
