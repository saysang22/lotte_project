import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './detail.scss';

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

  let content = useSelector((state) => state);

  let price = content.datas[id].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
      <div className="container_wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src= {require('../d_' + id + '.jpg')} width="100%" alt="상품 이미지"/>
            <div className="small_images">
              <div className="row">
                <div className="col-4">
                  <img src={require('../detail_0.jpg')} alt="상품이미지"  width='100%'/>
                </div>
                <div className="col-4">
                  <img src={require('../detail_1.jpg')} alt="상품이미지"  width='100%'/>
                </div>
                <div className="col-4">
                  <img src={require('../detail_2.jpg')} alt="상품이미지"  width='100%'/>
                </div>
              </div>
              {/* .row */}
            </div>
          </div>
          {/* .col-md-6 */}
          <div className="col-md-6 detail_text_wrap">
            <div className="detail_text">
              <h4>{'[' + content.datas[id].title + ']'}</h4>
              <p className="content_text">{content.datas[id].content}</p>
              <div className="price_wrap">
                <span>판매가</span>
                <span className="big_num">{price}</span>
                <div className="sale_wrap">
                  <span className="sale_price">150000</span>
                  <span className="sale_percent">10%</span>
                </div>
                {/* .sale_wrap */}
              </div>
              {/* .price_wrap */}
              <div className="quan_wrap">
                <span>수량</span>
                <input type='number' value={number} onChange={changeNumber}/>
              </div>
              {/* .quan_wrap */}
              <div className="button_wrap">
                <button>장바구니</button> 
                <button>주문하기</button>
              </div>
              {/* .button_wrap */}
            </div> 
            {/* .detail_text */}
          </div>
          {/* .detail_text_wrap */}
        </div>
        {/* .row */}
        <div className="info_text_box_wrap">
          <div className="info_text_wrap">
            <div className="title">
              <h4>상품 안내</h4>
            </div>
            {/* .title */}
            <div className="product_text">
                <span className="small_title">"프리미엄 뷔페 레스토랑, 라세느"</span>
                <span className="small_text">전문 셰프들이 즉석에서 선보이는 200여 가자의 요리를 경험할 수 있습니다.<br/>아시안식, 일식, 양식, 누들, 콜드밀(Cold Meal), 코리안 그릴, 디저트, BAR 등 8개의 라이브 섹션에서 다양한 요리를 맛볼 수 있는 스튜디오 타입의 라이브 키친입니다.</span>
                <span className="config">· 상품 구성: 주중저녁, 주말점심/ 저녁 뷔페 성인 1인</span>
            </div>
            {/* .product_text */}
          </div>
          {/* .info_text_wrap */}
          <div className="info_text_wrap">
            <div className="title">
              <h4>유의사항</h4>
            </div>
            {/* .title */}
            <div className="product_text">
              <ul className="product_list">
                <li>· 레스토랑 타입: 뷔페</li>
                <li>· 레스토랑 위치: 롯데호텔 서울 MAIN TOWER 1층</li>
                <li>· 문의전화: 02-317-7171 ~ 2</li>
                <li>· 이용시간</li>
                <li>[월~금요일] 저녁 18:00 ~ 21:30 (금요일 17:30 ~ 21:30)</li>
                <li>[토요일 및 공휴일]</li>
                <li>점심 1부 11:30 ~ 13:30, 점심2부 14:00 ~ 16:00</li>
                <li>저녁1부 17:30 ~ 19:30, 저녁2부 20:00 ~ 22:00</li>
                <li>· 본상품은 분할 사용이 불가 합니다.(4매 구매후, 2매 사용등)</li>
                <li>· 구매 완료 후에는 상품 양도 및 선물이 불가능합니다.</li>
                <li>· 레스토랑 이용시 반드시 사전 예약 부탁드립니다.</li>
                <li>· 특별요금 적용일자 이용시 추가 요금이 발생할 수 있습니다.</li>
                <li>· 다중이용시설 권고 사항에 따라 출입 명부 작성 마스크 착용 바랍니다.</li>
                <li>· 사회적 거리두기 지침에 따라 영업시간 및 이용 가능 인원이 변동 될 수 있습니다.</li>
              </ul>
            </div>
            {/* .product_text */}
          </div>
          {/* .info_text_wrap_01 */}
          <div className="info_text_wrap">
            <div className="title">
              <h4>기타정보</h4>
            </div>
            {/* .title */}
            <div className="product_text">
              <ul className="product_list">
                <li>· 판매자: (주)호텔롯데 롯데호텔 이숍</li>
                <li>· 유효기간, 이용조건 (유효기간 경과 시 보상 기준 포함) : 발행일로부터 93일</li>
                <li>· 유효기간 경과 시 자동 취소, 100% 환불</li>
                <li>· 이용 가능 매장 : 롯데호텔 서울 라세느</li>
                <li>· 환불 조건 및 방법 : 롯데호텔 이숍 홈페이지 취소/환불 규정 참조</li>
                <li>· 소비자 상담 관련 전화번호 : 02-759-7700</li>
              </ul>
            </div>
            {/* .product_text */}
          </div>
          {/* .info_text_wrap */}
        </div>
        {/* .info_text_box_wrap */}

      </div>  
      {/* .container */}
    </div>   
    )
}

export default Detail;