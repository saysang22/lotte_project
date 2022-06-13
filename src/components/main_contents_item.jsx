import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TextWrap = styled.div`
    margin: 10px 0 60px 0;
`

const H4 = styled.h4`
    font-size: 16px;
    text-align: left;
`

const More = styled.p`
    text-align: right;
    margin: 0 0 15px 0;
    color:#998465;
    transition: all .8s;


    &:hover {
        font-weight: bold;
        transition: all .8s;

    }
`

const Text = styled.p`
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    margin: 10px 0 0 0;
` 

const MainContentsItem = (props) => {

    let a = useSelector((state) => state);

    return (
        <div className="col-md-4">
            <Link to={'/detail/' + props.i} >
                <div>
                    <img src= {require('../d_' + props.i + '.jpg')} width='100%' alt="상품이미지" />
                </div>
                <TextWrap>
                    <More>자세히 보기 {'>'}</More>
                    <H4>{'['}{a.datas[props.i].title}{']'}</H4>
                    <Text>{a.datas[props.i].content}</Text>
                </TextWrap>
            </Link>
        </div>

    )
}

export default MainContentsItem;