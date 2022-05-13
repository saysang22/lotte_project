import React from "react";
import MainContentsItem from "./main_contents_item";
import styled from 'styled-components';
import { useSelector } from "react-redux";

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

const MainContents = (props) => {

    let aa = useSelector((state) =>  state );

    let bb = [];

    if(props.showmain === true) {
        bb = aa.datas.filter((a) => {
            
            return a.showmain === true ? { ...a} : null;
        })
    }else{

        bb= [... aa.datas];
    }

    return(
        <MarginTop>
            <div className="container">
                <H2>인기상품</H2>
                <div className="row">
                    {
                        bb.map((a, i) => {

                            return ( 
                        
                                // <MainContentsItem shoes = {shoes[i]} i={shoes[i].id}/>
                                <MainContentsItem i = {a.id} key = {a.id}/>
                                
                            )
                        })


                    }
                    
                </div>
            </div>
        </MarginTop>
    )
}

export default MainContents;