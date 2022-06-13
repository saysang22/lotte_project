import React from "react";
import { connect } from "react-redux";

const NoticeWrap = (props) => {

    const noticeFilter = props.state.filter((data) => {

    });

    let showNoData = noticeFilter.length === 0  ? <tr><td colSpan='3' style={{'text-align': 'center'}}>등록된 내용이 없습니다.</td></tr> : '';


    return (
      <div className="notice_wrap">
        <div className="faq_search_wrap">
          <input type="text" placeholder="검색어를 입력해주세요" />
        </div>
        {/* .faq_search_wrap */}

        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>{showNoData}</tbody>
        </table>
      </div>
      // .notice_wrap
    );
}

function noticeProps(state) {

    return {
        state: state.noticeData
    }
}

export default connect(noticeProps)(NoticeWrap);