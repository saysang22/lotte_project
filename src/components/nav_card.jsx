import React from "react";

const NavCard = (props) => {

    return (
        <>
        <div className="card_wrap">
            <img src= {require('../d_' + props.datas.id + '.jpg')} alt="jpg" />
            <div className="card_text">
                <p>자세히 보기 {'>'}</p>
                <h4>{'['}{props.datas.title}{']'}</h4>
                <p>{props.datas.content}</p>
            </div>
            {/* .card_text */}
            <div className="price">
                <span>kRW</span>
                <span>{props.datas.price}</span>
            </div>
            {/* .price */}
        </div>
        {/* .card_wrap */}
        </>
    )
}

export default NavCard;