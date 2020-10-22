import React, {useContext} from 'react'
import {Rate} from 'antd';
import {Link} from "react-router-dom";
import {MoviesContext} from '../Context/Context'
import './Style.css'

const Movies = () => {
    const [movies] = useContext(MoviesContext)

    return(
        <div className="container">
        <h1 className="title-container">Movies</h1>
        <div className="container-item">
        {movies !== null && movies.map(item =>{
        return(
        <Link to={`detailmovies/${item.id}`} style={{textDecoration: "none"}}>
        <div className="card" key={item.id}>
            <div className="cover-image">
            <img className="img-item" src={item.image} alt={item.title}/>
        </div>
        <h1 className="title-item">{item.title}</h1>
        <div className="cover-detail">
        <p className="detail-1">{item.genre}</p>
        <p className="detail-2">{item.year}</p>
        </div>
        <Rate allowHalf disabled defaultValue={item.rating / 2}/>
        </div>
        </Link>
         )})}
        </div>
        </div>
    );
}

export default Movies