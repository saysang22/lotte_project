import React, { useEffect, useState } from "react";
import './faq.scss';
import FaqNonSearch from "./faq_non_search";
import FaqWrap from "./faq_wrap";
import NoticeWrap from "./notice_wrap";

const Faq = () => {

    let [faqTitle, setFaqTitle] = useState('자주하는질문');

    function faqTitleButton (title) {

        setFaqTitle(title);
    }

    useEffect (() => {


        const bigTab = document.querySelectorAll('.tab_button_wrap span');
        const faqWrap = document.querySelector('.faq_wrap');
        const noticeWrap = document.querySelector('.notice_wrap');
        const faqNonSearchWrap = document.querySelector('.faq_non_search_wrap');

        for(let i = 0; i < bigTab.length; i++) {
            
            bigTab[i].addEventListener('click', function(e){

                for(let i = 0; i < bigTab.length; i++) {

                    bigTab[i].classList.remove('big_tab_button');
                    noticeWrap.classList.remove('show_faq_table')
                    faqNonSearchWrap.classList.remove('show_faq_table')

                }

                e.target.classList.add('big_tab_button');

                if(i == 0) {
                    noticeWrap.classList.add('show_faq_table');
                    faqWrap.classList.remove('show_faq_table')
                    faqNonSearchWrap.classList.remove('show_faq_table')

                }else if(i == 1){
                    faqWrap.classList.add('show_faq_table');
                    noticeWrap.classList.remove('show_faq_table')
                    faqNonSearchWrap.classList.remove('show_faq_table')
                }else if(i == 3) {
                    faqNonSearchWrap.classList.add('show_faq_table');
                    noticeWrap.classList.remove('show_faq_table')
                    faqWrap.classList.remove('show_faq_table')

                }
            });

        }


    },[])


    useEffect(() => {



    },[]);


    return (
      <div className="faq_total_wrap">
        <div className="inner_faq">
          <h3 className="faq_title">{faqTitle}</h3>
          <div className="tab_wrap">
            <div className="tab_button_wrap">
              <span onClick={() => faqTitleButton('공지사항')}>공지사항</span>
              <span onClick={() => faqTitleButton('자주하는 질문')} className='big_tab_button'>자주하는 질문</span>
              <span onClick={() => alert('로그인 후 이용하세요')}>1:1문의</span>
              <span onClick={() => faqTitleButton('비회원주문 조회')}>비회원주문 조회</span>
            </div>
            {/* .tab_button_wrap */}
            <NoticeWrap/>
            <FaqWrap/>
            <FaqNonSearch/>
          </div>
          {/* .tab_wrap */}
        </div>
        {/* .inner_faq */}
      </div>
      // .faq_total_wrap
    );
}


export default Faq;