import React, {useContext} from 'react'
import {LaptopOutlined} from '@ant-design/icons';
import {useParams} from "react-router-dom";
import {GamesContext} from '../Context/GamesContext'
import './Style.css'

const DetailGames = () => {
    const [games] = useContext(GamesContext)
    
    let { id } = useParams();
    const item = games.filter(item => item.id == id)
    
    return(
        <div className="container">
            <div className="detail-container" key={item[0].id}>
            <div><img className="detail-picture" src={item[0].image} alt=""/></div>
            <div className="detail">
            <h2 className="detail-tittle">{item[0].title}</h2>
            <br/>
            <p>Genre : {item[0].genre}</p>
            <p>Single Player : {item[0].singlePlayer}</p>
            <p>Multi Player : {item[0].multiPlayer}</p>
            <p>Release : {item[0].year}</p>
            <br/>
            <p><LaptopOutlined/>&nbsp;Platform :</p>
            <p className="detail-detail">{item[0].platform}</p>
            </div>
            </div>
        </div>
    );
}

export default DetailGames