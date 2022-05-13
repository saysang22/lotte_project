import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import BestContentsItem from "./bestContentsItem";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const MarginTop = styled.div`
    margin: 30px 0 0 0;
`
const H2 = styled.h2`
    font-size: 30px;
    color: #998465;
    text-align: left;
    font-weight: bold;
    margin: 0 0 20px 0;
`

const BestContents = () => {

    let bestCotentMap = useSelector((state) => state);

    let bestContentFilter = [];

    bestContentFilter = bestCotentMap.datas.filter((data)=>{
        return data.best === true ? {...data} : null;
    });


    let { id } = useParams();

    return(
        <MarginTop>
            <div className="container">
                <div className="row">
                    <H2>추천 상품</H2>

                    {
                        bestContentFilter.map((data) => {

                            return  <BestContentsItem index={data} key={data.id}/>

                        })
                    }
                </div>
            </div>
        </MarginTop>
    )
}

export default BestContents;