import React, {useContext} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import {GamesContext, UserContext} from '../Context/Context'
import {Table, Space, Button} from 'antd';
import {PlusCircleTwoTone} from '@ant-design/icons';
import './Style.css'

const ListGames = () => {
    const [games, setGames] = useContext(GamesContext)
    const [user] = useContext(UserContext)

    const handleDelete = event =>{
      var action = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbersy.com/api/data-game/${action}`, {headers: {"Authorization" : `Bearer ${user.token}`}} )
        .then(res => {
          var newGames = games.filter(id=> id.id !== action)
          setGames(newGames)
        })
    }

const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      ellipsis: true,
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Genre',
        dataIndex: 'genre',
        ellipsis: true,
        sorter: (a, b) => a.genre.length - b.genre.length,
        sortDirections: ['descend', 'ascend'],
      },
    {
      title: 'Single Player',
      dataIndex: 'singlePlayer',
      sorter: {
        compare: (a, b) => a.singlePlayer - b.singlePlayer,
        multiple: 3,
      },
    },
    {
      title: 'Multi Player',
      dataIndex: 'multiplayer',
      sorter: {
        compare: (a, b) => a.multiplayer - b.multiplayer,
        multiple: 2,
      },
    },
    {
      title: 'Released',
      dataIndex: 'year',
      sorter: {
        compare: (a, b) => a.year - b.year,
        multiple: 1,
      },
    },
    {
        title: 'Platform',
        dataIndex: 'platform',
        ellipsis: true
      },
      {
        title: 'Action',
        key: 'id',
        render: (a) => (
          <Space size="middle">
            <button><Link to={`editgames/${a.id}`}>Edit</Link></button>
            <button value={a.id} onClick={handleDelete}>Delete</button>
          </Space>
        )
      },
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

    return(
        <div className="container">
            <h1 className="title-container">List Games</h1>
            <Link to='/addgames'><Button style={{float: "left", margin: "10px 0 15px 15px"}} type="primary"><PlusCircleTwoTone/> Add New Games</Button></Link>
            <Table columns={columns} dataSource={games} onChange={onChange}/>
        </div>
    );
}

export default ListGames

