import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const TextWrap = styled.div`
    margin: 10px 0 60px 0;
`

const H4 = styled.h4`
    font-size: 16px;
    text-align: left;
`

const TextBox = styled.div`

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

const BestContentsItem = (props) => {

    let { id } = useParams();

    return(
        <>
            <div className="col-md-4">
                <Link to={'/detail/' + props.index.id}>
                    <img src={require('../d_' + props.index.id + '.jpg')} alt='이미지' width='100%'/>
                    <TextWrap>
                        <More>자세히 보기 {'>'}</More>
                        <H4>{'['}{props.index.title}{']'}</H4>
                        <Text>{props.index.content}</Text>
                    </TextWrap>
                </Link>
            </div>
</>
    )
}

export default BestContentsItem;