import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {GamesContext} from '../Context/GamesContext'
import './Style.css'

const Games = () => {
    const [games] = useContext(GamesContext)

    return(
        <div className="container">
        <h1 className="title-container">Games</h1>
        <div className="container-item">
        {games !== null && games.map(item =>{
        return(
        <Link to={`detailgames/${item.id}`} style={{textDecoration: "none"}}>
        <div className="card" key={item.id}>
            <div className="cover-image">
            <img className="img-item" src={item.image} alt={item.title}/>
        </div>
        <h1 className="title-item">{item.title}</h1>
        <div className="cover-detail">
        <p className="detail-1">{item.genre}</p>
        <p className="detail-2">{item.year}</p>
        </div>
        </div>
        </Link>
         )})}
        </div>
        </div>
    );
}

export default Games