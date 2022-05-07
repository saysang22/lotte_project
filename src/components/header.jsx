import React, {useState,useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import './header.scss';

const Header = (props) => {
  
    let add = '/lotte_portfolio';

    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {

        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

  
    useEffect(() => {
  
        window.addEventListener('scroll', updateScroll);

    },[]);

    return (
        <>
        <div className="header">
            <div className={props.topPage ?( scrollPosition > 150 ? 'header_in_bottom' : 'header_in_top') : 'header_in_bottom'}>
                <div className="logo">
                    <Link to={add} exact>LOTTE HOTEL e-SHOP</Link>
                </div>
                <div className="ham_wrap">
                    <div className="ham">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to ='/components/drive'>드라이브스루</Link>
                        </li>
                        <li>
                            <Link to='/components/store'>레스토랑 이용권</Link>
                        </li>
                        <li>
                            <Link to='/components/food'>푸드</Link>
                        </li>
                        <li>
                            <Link to='/components/primium'>프리미엄 베딩</Link>
                        </li>
                        <li>
                            <Link to='/components/life'>라이프스타일</Link>
                        </li>
                        <li>
                            <Link to='/components/paper'>지류 상품권</Link>
                        </li>
                    </ul>
                </div>
                {/* .menu */}
                <div className="info_menu_wrap">
                    <div className="info_menu">
                        <ul>
                            <li>
                                <Link>로그인</Link>
                            </li>
                            <li>
                                <Link>비회원주문조회</Link>
                            </li>
                            <li>
                                <Link>FAQ</Link>
                            </li>
                            <li>
                                <Link>장바구니</Link>
                            </li>
                        </ul>
                    </div>
                    {/* info_menu */}
                    <div className="search_box">
                        <input placeholder="검색어를 입력하세요"/>
                    </div>
                </div>
                {/* info_menu_wrap */}
            </div>
            {/* header_in */}
        </div>
        {/* .header */}
        </>
    )
}

export default Header;