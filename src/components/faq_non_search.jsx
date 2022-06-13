import React from "react";

const FaqNonSearch = () => {

    return (
        <div className="faq_non_search_wrap">

            <h4>주문시 이메일이나 문자로 수령한 주문번호와 비밀번호를 입력하세요</h4>
            <div className="non_member_input_wrap">
                <div className="order_num_wrap">
                    <p>주문번호</p>
                    <input type="text"  placeholder="주문번호를 입력하세요"/>
                </div>
                {/* .order_num_wrap */}
                <div className="order_name_wrap">
                    <p>주문자명</p>
                    <input type="text" placeholder="주문자명을 입력하세요"/>
                </div>
                {/* .order_name_wrap */}
                <p>연락처</p>
                <div className="phone_wrap">
                    <input type="number" placeholder="- 제외하고 숫자만 입력하세요"/>
                    <span className="certification_submit">인증번호 발송</span>
                </div>
                {/* .phone_wrap */}
                <div className="certification_wrap">
                    <input type="number"  placeholder="인증번호 입력"/>
                    <span className="certification">인증</span>
                    <span className="certification_timer">인증시간 02:35</span>
                </div>
                {/* .certification_wrap */}
            </div>
            {/* .non_member_input_wrap */}

        </div>
        // .faq_non_search_wrap
    )
}

export default FaqNonSearch;