import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {Button} from 'antd';
import {WechatOutlined, FileUnknownOutlined, ArrowLeftOutlined} from '@ant-design/icons';
import {useParams} from "react-router-dom";
import {MoviesContext} from '../Context/Context'
import './Style.css'

function minuteToHours(num){
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return ( rhours === 0 ? "" : rhours + " Jam") + (rminutes === 0 ? "" : " " + rminutes + " Menit")
  }

const DetailGames = () => {
    const [movies] = useContext(MoviesContext)
    
    let { id } = useParams();
    const item = movies.filter(item => item.id == id)
    
    return(
        <div className="container">
            <div className="detail-container" key={item[0].id}>
            <div>
            <Link to='/movies'><Button style={{float: "left", margin: "10px 0 15px 15px"}} type="primary"><ArrowLeftOutlined/></Button></Link>
            <img className="detail-picture" src={item[0].image} alt=""/>
            </div>
            <div className="detail">
            <h2 className="detail-tittle">{item[0].title}</h2>
            <br/>
            <p>Genre : {item[0].genre}</p>
            <p>Rating : {item[0].rating}</p>
            <p>Duration : {minuteToHours(item[0].duration)}</p>
            <p>Year : {item[0].year}</p>
            <br/>
            <p><FileUnknownOutlined/>&nbsp;Description :</p>
            <p className="detail-detail">{item[0].description}</p>
            <br/>
            <p><WechatOutlined/>&nbsp;Review :</p>
            <p className="detail-detail">{item[0].review}</p>
            </div>
            </div>
        </div>
    );
}

export default DetailGames