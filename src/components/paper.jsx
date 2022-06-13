import React from "react";
import paper_10000 from '../coupon_img10000.jpg';
import paper_50000 from '../coupon_img50000.jpg';
import paper_100000 from '../coupon_img100000.jpg';
import paper_food from '../coupon_cerificate.jpg';
import './paper.scss';

const Paper = () => {
    return (
        <div className="paper_wrap">
            <div className="inner_paper">
                <h3>지류 상품권</h3>
                <div className="paper_content">
                    <div className="img_list">
                        <ul>
                            <li>
                                <img src= {paper_10000} alt="만원상품권" />
                            </li>
                            <li>
                                <img src= {paper_50000} alt="오만원상품권" />
                            </li>
                            <li>
                                <img src= {paper_100000} alt="십만원상품권" />
                            </li>
                        </ul>
                    </div>
                    {/* .img_list */}
                    <div className="table_wrap">
                        <h4>롯데호텔 상품권</h4>
                        <span>롯데호텔 전국 지점의 객실 및 레스토랑, 기타 부대시설에서 사용 하실 수 있는 상품권 입니다.</span>
                        <table>
                            <tr>
                                <th>상품 권종</th>
                                <th>판매처</th>
                                <th>구매문의</th>
                            </tr>
                            <tr>
                                <td rowSpan='2'>시그니엘</td>
                                <td>시그니엘 서울</td>
                                <td>02-3213-1000</td>
                            </tr>
                            <tr>
                                <td>시그니엘 부산</td>
                                <td>051-922-1000</td>
                            </tr>
                            <tr>
                                <td rowSpan='5'>롯데호텔</td>
                                <td>롯데호텔 서울</td>
                                <td>02-771-1000</td>
                            </tr>
                            <tr>
                                <td>롯데호텔 월드</td>
                                <td>02-419-7000</td>
                            </tr>
                            <tr>
                                <td>롯데호텔 부산</td>
                                <td>051-810-1000</td>
                            </tr>
                            <tr>
                                <td>롯데호텔 제주</td>
                                <td>064-731-1000</td>
                            </tr>
                            <tr>
                                <td>롯데호텔 울산</td>
                                <td>052-960-1000</td>
                            </tr>
                        </table>
                        <div className="paper_top_text">
                            <p className="paper_small_title">[상품권 사용처]</p>
                            <p className="paper_txt">* 롯데호텔앤리조트, 롯데면세점, 롯데월드어드벤처, 김해 롯데워터파크, 롯데월드 아쿠아리움, 서울 스카이</p>
                            <p className="paper_txt">* 롯데리조트제주, 롯데리조트부여, 롯데리조트속초</p>
                            <p className="paper_txt">* 롯데스카이힐 제주C.C, 롯데스카이힐 부여C.C, 롯데스카이힐 김해C.C</p>
                        </div>
                        {/* .paper_top_text */}
                        <div className="paper_bottom_text">
                            <p className="paper_small_title">[유의사항]</p>
                            <p className="paper_txt">* 상품권의 유효기간은 발행일로부터 5년 입니다.</p>
                            <p className="paper_txt">* 상품권은 현금과 교환되지 않습니다.</p>
                            <p className="paper_txt">* 대량 구매 시 사전에 문의 주시기 바랍니다.</p>
                        </div>
                        {/* .paper_bottom_text */}
                    </div>
                    {/* .table_wrap */}
                </div>
                {/* .paper_content */}
                <div className="paper_food_content paper_content">
                    <div className="img_list">
                        <ul>
                            <li>
                                <img src= {paper_food} alt="푸드 상품권" />
                            </li>
                        </ul>
                    </div>
                    {/* .img_list */}
                    <div className="table_wrap">
                        <h4>롯데호텔 뷔페 이용권 1인</h4>
                        <span>롯데호텔 프리미엄 뷔페 레스토랑을 이용하실 수 있는 상품권입니다.</span>
                        <table>
                            <tr>
                                <th>상품 권종</th>
                                <th>판매처</th>
                                <th>구매문의</th>
                            </tr>
                            <tr>
                                <td rowSpan='4'>롯데호텔</td>
                                <td>롯데호텔 서울 라세느</td>
                                <td>02-317-7171</td>
                            </tr>
                            <tr>
                                <td>롯데호텔 월드 라세느</td>
                                <td>02-411-7811</td>
                            </tr>
                            <tr>
                                <td>롯데호텔 제주 더캔버스</td>
                                <td>064-731-4265</td>
                            </tr>
                            <tr>
                                <td>롯데호텔 부산 라세느</td>
                                <td>051-810-6390</td>
                            </tr>
                        </table>
                        <div className="paper_top_text">
                       <p className="paper_small_title">[상품권 사용처]</p>
                       <p className="paper_txt">* 롯데호텔 서울 라세느, 롯데호텔 월드 라세느, 롯데호텔 제주 더 캔버스, 롯데호텔 부산 라세느</p>
                    </div>
                    {/* .paper_top_text */}
                    <div className="paper_bottom_text">
                        <p className="paper_small_title">[유의사항]</p>
                        <p className="paper_txt">* 상품권의 유효기간은 발행일로부터 1년간 입니다.</p>
                        <p className="paper_txt">* 상품권은 현금과 교환되지 않습니다.</p>
                        <p className="paper_txt">* 특별행사 또는 12월 이용 시 추가요금이 발생 할 수 있습니다.</p>
                        <p className="paper_txt">* 레스토랑 이용 시 사전 예약 후 이용하시기 바랍니다.</p>
                    </div>
                    {/* .paper_bottom_text */}

                    </div>
                    {/* .table_wrap */}
                </div>
                {/* .paper_food_content */}
            </div>
            {/* .inner_paper */}
        </div>
        // .paper_wrap
    )
}

export default Paper;