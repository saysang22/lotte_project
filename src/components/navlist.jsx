import React, {} from "react";
import { Link, useParams } from 'react-router-dom';
import './navlist.scss';
import NavCard from "./nav_card";

const Navlist = (props) => {

    const { id } = useParams();

    const total = props.datas.filter((a) => {
        return a.cate === id ? { ...a } : null;
    })

    return (
        <div className="container_wrap">
            <div className="container_flex">
                <div className="area_position">
                    <div className="area_wrap">
                        <h4>드라이브스루</h4>
                        <div className="text_wrap">
                            <p>롯데호텔 서울</p>
                            <p>롯데호텔 월드</p>
                            <p>롯데호텔 부산</p>
                            <p>롯데호텔 울산</p>
                        </div>
                    </div>
                </div>
                {/* .area_wrap */}
                <div className="contents_wrap">
                    <h2>드라이브스루 전국</h2>
                        <div className="title">
                        <p className="total">총 {total.length}개의 상품이 있습니다</p>
                        <select>
                            <option value="a1">등록순</option>
                            <option value="a2">인기상품순</option>
                            <option value="a3">최신상품순</option>
                            <option value="a4">낮은가격순</option>
                            <option value="a5">높은가격순</option>
                        </select>
                    </div>
                    <div className="content">

                        {
                            total.map((a, i) => {
                                return                         <NavCard datas={total[i]}/>
                            })
                        }
                    </div>
                    {/* .content */}
                </div>
                {/* .contents_wrap */}
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>


        </div>
    )
}

export default Navlist;