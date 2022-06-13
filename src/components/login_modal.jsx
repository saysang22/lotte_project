import React, {useEffect} from "react";
import { CgClose } from 'react-icons/cg';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FaFacebookSquare } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import './login_modal.scss';

const LoginModal = () => {

    useEffect(() => {

        const closeButton =  document.querySelector('.close_button');
        const showModal = document.querySelector('.login_modal_wrap');

        closeButton.addEventListener('click', function(){

            showModal.classList.toggle('show_modal_wrap');

        });
    },[]);

    return (
        <>       
         <div className="login_modal_wrap">
            <div className="modal_wrap">
                <div className="close_wrap">
                    <CgClose className='close_button'/>
                </div>
                {/* .close_wrap */}
                <h4>로그인</h4>
                <div className="login_input_wrap">
                    <input type="text" placeholder="아이디를 입력해주세요" className="login_input"/>
                    <input type="text" placeholder="비밀번호를 입력해주세요" className="login_input"/>
                </div>
                {/* .login_input_wrap */}
                <div className="submit_button">
                    <span className="login_button login_button_default">로그인</span>
                    <span className="signup_button login_button_default">회원가입</span>
                    <div className="sns_button">
                        <div className="kakao_wrap sns_wrap">
                            <RiKakaoTalkFill className="sns_icon"/>
                            <span className="sns_title">카카오톡<br/>로그인</span>
                        </div>
                        {/* .kakao_wrap */}
                        <div className="facebook_wrap sns_wrap">
                            <FaFacebookSquare className="sns_icon"/>
                            <span className="">페이스북<br/>로그인</span>
                        </div>
                        {/* .facebook_wrap */}
                        <div className="naver_wrap sns_wrap">
                            <SiNaver className="sns_icon"/>
                            <span className="">네이버<br/>로그인</span>
                        </div>
                        {/* .naver_wrap */}
                    </div>
                    {/* .sns_button */}
                </div>
                {/* .submit_button */}
            </div>
            {/* .modal_wrap */}
        </div>
        {/* .login_modal_wrap */}
        </>
    )
}

export default LoginModal;