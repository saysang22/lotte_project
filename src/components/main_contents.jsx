import React from "react";
import MainContentsItem from "./main_contents_item";
import styled from 'styled-components';

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

    // const {id} = useParams();
    
    // let shoes = [];
    // console.log(id);
    // if(id){
    //     shoes = props.shoes.filter((a) => {
    //         return a.cate === id ? {...a} : null;
    //     })
    //     console.log(shoes);
    // }else{
    //     shoes = [...props.shoes];
    // }

    let shoes = [];

    if(props.showmain === true) {
        shoes = props.shoes.filter((a) => {
            
            return a.showmain === true ? { ...a} : null;
        })
    }else{
        shoes = [ ...props.shoes];
    }

    return(
        <MarginTop>
            <div className="container">
                <H2>인기상품</H2>
                <div className="row">
                    {
                        shoes.map((a, i) => {

                            return ( 
                        
                                <MainContentsItem shoes = {shoes[i]} i={shoes[i].id}/>
                                
                            )
                        })


                    }
                    
                </div>
            </div>
        </MarginTop>
    )
}

export default MainContents;