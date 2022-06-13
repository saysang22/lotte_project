import React, {useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import './header.scss';
import LoginModal from "./login_modal";
import NonMemberModal from "./non_members_modal";

const Header = (props) => {

    let add = '/lotte_portfolio';

    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {

        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

  
    useEffect(() => {
  
        window.addEventListener('scroll', updateScroll);

    },[]);

    useEffect(() => {

        // .ham_wrap을 클릭 하면 .none_display에 클래스를 추가한다

        let hamButton = document.querySelector('.ham_wrap');

        hamButton.addEventListener('click', function(){

            document.querySelector('.none_display').classList.toggle('ham_menu_wrap');

        });

        let linkButton = document.querySelectorAll('.none_display a');

        for(let i = 0; i < linkButton.length; i++) {

            linkButton[i].addEventListener('click', function(){

            document.querySelector('.none_display').classList.toggle('ham_menu_wrap');

            });
    
        }
        
    },[]);

    useEffect(() => {

        const loginClick = document.querySelector('.login_show');
        const modalShow = document.querySelector('.login_modal_wrap');

        loginClick.addEventListener('click', function(){
            modalShow.classList.toggle('show_modal_wrap');
        });

    },[]);

    useEffect(() => {

        const nonMemberClick = document.querySelector('.non_member_show');
        const showNonMemberModal = document.querySelector('.non_member_modal_wrap');

        nonMemberClick.addEventListener('click', function(){

            showNonMemberModal.classList.toggle('show_non_member_modal_wrap');
            
        });


    },[]);

    useEffect(() => {
        
        const homeLogo = document.querySelector('.logo');
        const visitA = document.querySelectorAll('.menu a');

            homeLogo.addEventListener('click', function(){

                for(let i = 0; i < visitA.length; i++) {

                visitA[i].classList.remove('visit_a');
                
            }


            });
    

        
    },[])

    const onKey = (e) => {

        if(e.key === 'Enter') {

            window.location.href = '/components/search?text=' + e.target.value;
           
        }

    }


    const [test, setTest] = useState('');

    return (
        <>
        <div className="header">
            <div className={props.topPage ?( scrollPosition > 150 ? 'header_in_bottom' : 'header_in_top') : 'header_in_bottom'}>
                <div className="logo">
                    <Link to={add} exact onClick={() => setTest('')}>LOTTE HOTEL e-SHOP</Link>
                </div>
                <div className="ham_wrap">
                    <div className="ham">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {/* .ham */}
                </div>
                {/* .ham_wrap */}
                <div className="none_display">
                        <ul>
                            <li>
                                <Link to='/components/drive'>드라이브스루</Link>
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
                                <Link to='/components/paper'>지류상품권</Link>
                            </li>
                        </ul>
                    </div>
                    {/* .none_display */}

                <div className="menu">
                    <ul>
                        <li className="">
                            <Link to ='/components/drive' onClick={() => setTest('drive')} className={test === 'drive' ? 'visit_a' : 'nomal_a'}>드라이브스루</Link>
                        </li>
                        <li>
                            <Link to='/components/store' onClick={() => setTest('store')} className={test === 'store' ? 'visit_a' : 'nomal_a'}>레스토랑 이용권</Link>
                        </li>
                        <li>
                            <Link to='/components/food' onClick={() => setTest('food')} className={test === 'food' ? 'visit_a' : 'nomal_a'}>푸드</Link>
                        </li>
                        <li>
                            <Link to='/components/primium' onClick={() => setTest('primium')} className={test === 'primium' ? 'visit_a' : 'nomal_a'}>프리미엄 베딩</Link>
                        </li>
                        <li>
                            <Link to='/components/life' onClick={() => setTest('life')} className={test === 'life' ? 'visit_a' : 'nomal_a'}>라이프스타일</Link>
                        </li>
                        <li>
                            <Link to='/components/paper' onClick={() => setTest('paper')} className={test === 'paper' ? 'visit_a' : 'nomal_a'}>지류 상품권</Link>
                        </li>
                    </ul>
                </div>
                {/* .menu */}
                <div className="info_menu_wrap">
                    <div className="info_menu">
                        <ul>
                            <li className="login_show">
                                로그인
                            </li>
                            <li className="non_member_show">
                                비회원<br/>주문조회
                            </li>
                            <li>
                                <Link to='/components/faq' onClick={() => setTest('')}>FAQ</Link>
                            </li>
                            <li>
                                <Link to='/components/cart' onClick={() => setTest('')}>장바구니</Link>
                            </li>
                        </ul>
                    </div>
                    {/* info_menu */}
                    <div className="search_box">
                        {/* <form action="/components/search"> */}
                            <input placeholder="검색어를 입력하세요" className="search_input" onKeyUp = {(e) => {onKey(e)}} pattern='.{1,}' title='At least 1 characters'/>
                        {/* </form> */}
                    </div>
                    <LoginModal/>
                    <NonMemberModal/>
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