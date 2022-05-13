import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavCard = (props) => {

    let price = props.datas.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <div className="card_wrap">
            <Link to={'/detail/' + props.datas.id}>
            <img src= {require('../d_' + props.datas.id + '.jpg')} alt="jpg" />
            <div className="card_text">
                <p>자세히 보기 {'>'}</p>
                <h4>{'['}{props.datas.title}{']'}</h4>
                <p>{props.datas.content}</p>
            </div>
            {/* .card_text */}
            <div className="price">
                <span>kRW</span>
                <span>{price}</span>
            </div>
            {/* .price */}
            </Link>
        </div>
    )
}

export default NavCard;