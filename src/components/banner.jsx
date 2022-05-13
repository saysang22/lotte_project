import React from "react";
import styled  from 'styled-components';
import banner from '../banner_01.jpg';

const Banner = styled.div`
  width: 100%;
  height: 300px;
  margin: 50px 0 0 0;
  background: url(${banner}) no-repeat 0% 100% / 100%;
  position: relative;

`
const BannerTextWrap = styled.div`
  width: 500px;
  height: 200px;
  background: rgba(0,0,0,.7);
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px
  `

const BannerTitle = styled.span`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;

`

const BannerText = styled.span`
  color: #fff;
  letter-spacing: -1px;
  text-align: left;
  font-size: .9rem;
  line-height: 35px

`

const BannerWrap = () => {
    return(
        <Banner className="col-12">
            <BannerTextWrap className="col-12">
            <BannerTitle>
                LOTTE HOTEL e-SHOP
            </BannerTitle>
            <BannerText>
                다양한 프리미엄 상품을 LOTTE HOTEL e-SHOP 으로 만나보세요.
                롯데호텔만의 품격있는 상품들이 여러분의 일상에 가치를 더해드립니다.
            </BannerText>
            </BannerTextWrap>
        </Banner>

    )
}

export default BannerWrap;