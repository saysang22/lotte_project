import React from "react";
import './cart.scss';

const Cart = () => {

    return (
        <div className="cart_wrap">
            <div className="inner_cart">
                <h3>장바구니</h3>
                <div className="progress_wrap">
                    <div className="progress_wrap">
                        <span className="number active_number">1</span>
                        <span className="progress_text active_progress_text">장바구니</span>
                        <span className="line active_line"></span>
                    </div>
                    {/* .progress_wrap_01 */}
                    <div className="progress_wrap">
                        <span className="number">2</span>
                        <span className="progress_text">주문서 작성</span>
                        <span className="line"></span>
                    </div>
                    {/* .progress_wrap_02 */}
                    <div className="progress_wrap">
                        <span className="number">3</span>
                        <span className="progress_text">주문완료</span>
                    </div>
                    {/* .progress_wrap_03 */}
                </div>
                {/* .progress_wrap */}
                <div className="cart_sign_wrap">
                    <div className="inner_cart_sign">
                        <div className="sign_text">
                            <span>비회원구매 시 쿠폰 이용 등 회원에게만 제공되는 혜택을 받으실 수 없습니다.</span>
                            <span>회원가입 및 로그인 하시고 구매혜택 받아가세요</span>
                        </div>
                        {/* .sign_text */}
                        <div className="sign_button_wrap">
                            <span className="sign_up sign_button">회원가입</span>
                            <span className="login sign_button">로그인</span>
                        </div>
                        {/* .sign_button_wrap */}
                    </div>
                    {/* .inner_cart_sign */}
                </div>
                {/* .cart_sign_wrap */}
                <div className="delivery_button_wrap">
                    <span className="pick_up delivery_button">직접픽업</span>
                    <span className="delivery delivery_button">택배배송</span>
                </div>
                {/* .delivery_button_wrap */}
                <div className="cart_select_wrap">
                    <div className="select_wrap">
                        <input type="checkbox" id="total_select"/>
                        <label for='total_select'>전체선택</label>
                    </div>
                    {/* .select_wrap */}
                    <div className="select_del_wrap">
                        <span className="select_del">선택삭제</span>
                    </div>
                    {/* .select_del_wrap */}
                </div>
                {/* .cart_select_wrap */}
                <div className="cart_list_wrap">
                    <ul>
                        <li>
                            등록된 상품이 없습니다.
                        </li>
                    </ul>
                </div>
                {/* .cart_list_wrap */}
                <div className="krw_wrap">
                    <div className="inner_krw">
                        <div className="product_krw_wrap">
                            <p>상품금액</p>
                            <p>KRW 0</p>
                        </div>
                        {/* .product_krw_wrap */}
                        <div className="minus_wrap">
                            <span className="minus_span"></span>
                        </div>
                        {/* .minus_wrap */}
                        <div className="sale_wrap">
                            <p>할인금액</p>
                            <p>KRW 0</p>
                        </div>
                        {/* .sale_wrap */}
                        <div className="equal_wrap">
                            <span className="equal"></span>
                            <span className="equal"></span>
                        </div>
                        {/* .equal_wrap */}
                        <div className="totla_wrap">
                            <p>총 결제금액</p>
                            <p>KRW 0</p>
                        </div>
                        {/* .totla_wrap */}
                    </div>
                    {/* .inner_krw */}
                    <div className="krw_text_wrap">
                        <p>- 선택하신 상품의 수령을 변경하시려면 수량변경 후 [변경] 버튼을 누르시면 됩니다.</p>
                        <p>- [계속 쇼핑하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.</p>
                    </div>
                    {/* .krw_text_wrap */}
                </div>
                {/* .krw_wrap */}
                <div className="order_button_wrap">
                    <span className="shoping">계속 쇼핑하기</span>
                    <span className="select_order">선택상품 주문</span>
                    <span className="total_order">전체상품 주문</span>
                </div>
                {/* .order_button_wrap */}
            </div>
            {/* .inner_cart */}
        
        </div>
        // .cart_wrap
    )
}

export default Cart;