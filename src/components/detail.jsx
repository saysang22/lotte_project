import React, {useState} from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

const TopPadding = styled.div`
  padding-top: 100px
`;
const Number = styled.p `
`;

const Input = styled.input`
  width: 50px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #333;
  margin: 10px 10px 0 0;
  text-align: right;
`

const Button = styled.button`
  margin: 20px 15px 0 0; 
`;
const Detail = (props) => {

  let [number, setNumber] = useState(1);

  const changeNumber = (e) => {

    if ( e.target.value < 1) {

      setNumber(1);

    }else{
      setNumber(e.target.value);
    }
  }

  let { id } = useParams();
    return (
      <TopPadding>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+ (parseInt(id) + 1) +'.jpg'} width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <div>
              <Number>수량</Number>
              <Input type='number' value={number} onChange={changeNumber}/><span>개</span>
            </div>
            <Button className="btn btn-danger">장바구니</Button> 
            <Button className="btn btn-danger">주문하기</Button> 
          </div>
        </div>
      </div>  
    </TopPadding>   
    )
}

export default Detail;