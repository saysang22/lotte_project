import React, { useEffect } from "react";
import './non_member_moda.scss';
import { CgClose } from 'react-icons/cg';

const NonMemberModal = () => {

    useEffect(() => {

        const closeButton =  document.querySelector('.close_button_non');
        const showNoneMember = document.querySelector('.non_member_modal_wrap');

        closeButton.addEventListener('click', function(){

            showNoneMember.classList.toggle('show_non_member_modal_wrap');

        });
    },[]);


    return (
        <div className="non_member_modal_wrap">
            <div className="non_member_wrap">
                <div className="close_wrap">
                    <CgClose className='close_button_non'/>
                </div>
                {/* .close_wrap */}
                <div className="non_member_input_wrap">
                    <h4>비회원 주문조회</h4>
                    <p className="guide_text">주문시 이메일이나 문자로 수령한 주문번호와 비밀번호를 입력하세요</p>
                    <p className="non_member_text">주문번호</p>
                    <input type="text" placeholder="주문번호를 입력하세요"/>
                    <p className="non_member_text">주문자명</p>
                    <input type="text" placeholder="주문자명을 입력하세요"/>
                    <p className="non_member_text">연락처</p>
                    <div className="phone_submit">
                        <input type="text" placeholder="- 제외, 번호만 입력하세요"/>
                        <span>인증번호 발송</span>
                    </div>
                    {/* .phone_submit */}
                    <div className="certification_number">
                        <div className="certification_number_left">
                            <input type="text" placeholder="인증번호 입력"/>
                            <span className="certification_button">인증</span>
                        </div>
                        {/* .certification_number_left */}
                        <div className="certification_number_right">
                            <span className="certification_time">인증시간</span>
                            <span>02:35</span>
                        </div>
                        {/* .certification_number_right */}
                    </div>
                    {/* .certification_number */}
                </div>
                {/* .non_member_input_wrap */}
                <div className="non_member_search">
                    <span className="non_member_search_button">비회원 주문조회</span>
                </div>
                {/* .non_member_search */}
            </div>
            {/* non_member_wrap */}
        </div>
        // .non_member_modal_wrap
    )
}

export default NonMemberModal;