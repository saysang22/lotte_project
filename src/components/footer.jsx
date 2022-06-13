import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import footerLogo from '../pc_f_logo_wht.png';
import './footer.scss';

const FooterWrap = styled.div`
`


const Footer = () => {
    return (

        <div className="footer_wrap">
            <div className="container">
                <div className="top">
                    <div className="row inner_footer">
                        <div className="col-5 left_info_wrap">
                            <h4>
                                <img src={footerLogo} alt='lotte_logo'/>
                            </h4>
                            <span>(주)호텔 롯데</span>
                            <span>주소: (04533) 서울특별시 중구 을지로 30</span>
                            <span>대표이사: 안세진 / 사업자등록증: 104-81-25980</span>
                            <span>통신판매신고번호: 2004-서울중구-2802호</span>
                        </div>
                        <div className="col-7 right_info_wrap">
                            <div className="info_01">
                                <span>LOTTEHOTEL e-SHOP 고객센터</span>
                                <span>[전화번호] 02-759-7700</span>
                                <span>[운영시간] 평일 09:00~18:00</span>
                                <span>[점심시간] 평일 12:00~13:30</span>
                                <span className="point_title">*주말 및 공휴일은 1:1문의 게시판을 이용해주세요</span>
                            </div>
                            <div className="info_02">
                                <ul>
                                    <li>
                                        <Link>공지사항</Link>
                                    </li>
                                    <li>
                                        <Link>자주하는 질문</Link>
                                    </li>
                                    <li>
                                        <Link>1:1문의</Link>
                                    </li>
                                    <li>
                                        <Link>비회원 주문조회</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="info_03">
                                <ul>
                                    <li>
                                        <Link>로그인</Link>
                                    </li>
                                    <li>
                                        <Link>회원가입</Link>
                                    </li>
                                    <li>
                                        <Link>사이트맵</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* .top */}
                <div className="bottom">
                    <div className="row">
                        <div className="col-5 bottom_left">
                            <ul>
                                <li>
                                    <Link>개인정보처리방침</Link>
                                </li>
                                <li>
                                    <Link>이용약관</Link>
                                </li>
                                <li>
                                    <Link>라워즈 회원약관</Link>
                                </li>
                                <li>
                                    <Link>이용안내</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-7 bottom_right">
                            <select name="" id="">
                                <option value='1' selected>패밀리사이트</option>
                                <option value="">롯데지주</option>
                                <option value="">롯데건설</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* .bottom */}

            </div>
        </div>
    )
}

export default Footer;