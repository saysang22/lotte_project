import React, {} from "react";
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import './navlist.scss';
import NavCard from "./nav_card";
import qs from 'qs';

const Navlist = (props) => {

    const { id } = useParams();
    const { search } = useLocation();

    const query = qs.parse(search, {
        ignoreQueryPrefix: true
    });



    const total = props.datas.filter((a) => {

        if(id === 'search'){

            console.log(decodeURI(search))

            return a.content.indexOf(query.text) > -1 ? { ...a } : null ;

        }else{

            return a.cate === id ? { ...a } : null;
        }
    })

    
    let area = '';

switch(id) {
    case 'drive':
        area = '드라이브스루';
        break;
    case 'store':
        area = '레스토랑 이용권';
        break;

    case 'food':
        area = '푸드';
        break;

    case 'primium':
        area = '프리미엄 베딩';
        break;

    case 'life':
        area = '라이프스타일';
        break;

    case 'paper':
        area = '지류 상품권';
        break;

    case 'search':
        area = query.text + ' 검색 결과';
        break;
    

}

    return (
        <div className="container_wrap">
            <div className="container_flex">
                <div className="area_position">
                    <div className="area_wrap">
                        <h4>{area}</h4>
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
                    <h2>{area}</h2>
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
                            total.map((data) => {
                                return <NavCard datas={data} key={data.id}/>
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