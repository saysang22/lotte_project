import React, {useState, useEffect, useCallback, useMemo} from "react";
import { IoIosArrowDown } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import Faq_table from "./faq_table";
import { connect } from "react-redux";


const FaqWrap = (props) => {

    let [faqFilter, setFaqFilter] = useState('');
    let [faqCount, setFaqCount] = useState(1);
    let [searchList, setSearchList] = useState('');


    function faqMore() {

        setFaqCount(faqCount+1);
    }

    function faqShow(tab){

        setFaqFilter(tab);
        setFaqCount(1);
    
    }

    useEffect(() => {

        const selectButton = document.querySelectorAll('.select_button_wrap li');

        for(let i = 0; i < selectButton.length; i++) {

            selectButton[i].addEventListener('click', function(e){

                for(let i = 0; i < selectButton.length; i++) {

                    selectButton[i].classList.remove("tab_button_bg");
                }
                e.target.classList.add('tab_button_bg');
            });

        }

    },[]);

    const inputValue = (e) => {


        setSearchList(e.target.value);


    }

    return (
      <div className="faq_wrap show_faq_table">
        <div className="faq_search_wrap">
          <input type="text" placeholder="검색어를 입력해주세요" onChange={(e)=>{inputValue(e)}}/>
          <FiSearch className="search_icon"/>
        </div>
        {/* .faq_search_wrap */}

        <div className="select_button_wrap">
          <ul>
            <li
              className="tab_button_bg faq_all"
              onClick={() => {
                faqShow("");
              }}
            >
              전체
            </li>
            <li
              onClick={() => {
                faqShow("회원가입, 정보");
              }}
            >
              회원가입, 정보
            </li>
            <li
              onClick={() => {
                faqShow("주문");
              }}
            >
              주문
            </li>
            <li
              onClick={() => {
                faqShow("결제,배송");
              }}
            >
              결제,배송
            </li>
            <li
              onClick={() => {
                faqShow("반품,교환,취소");
              }}
            >
              반품,교환,취소
            </li>
            <li
              onClick={() => {
                faqShow("쿠폰");
              }}
            >
              쿠폰
            </li>
            <li
              onClick={() => {
                faqShow("기타");
              }}
            >
              기타
            </li>
          </ul>
        </div>
        {/* .select_button_wrap */}
        <div className="faq_table_wrap">
          <table>
            <Faq_table tab={faqFilter} moreCount={faqCount} search ={searchList}/>

            {/* {
                searchFilter.map((data) => {

                    return  <Faq_table key={data.id} tab={faqFilter} moreCount={faqCount} search ={searchList}/>

                })
            } */}

          </table>
        </div>
        {/* .faq_table_wrap */}
        <div
          className="faq_more_button_wrap"
          onClick={() => {
            faqMore();
          }}
        >
          <span>
            더보기
            <IoIosArrowDown className="more_icon" />
          </span>
        </div>
        {/* .faq_more_button_wrap */}
      </div>
    );
}

function faqWrapProps(state) {

    return {

        state: state.faqData
    }
}

export default connect(faqWrapProps)(FaqWrap);