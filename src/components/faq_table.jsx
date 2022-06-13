import React from "react";
import {IoIosArrowForward} from 'react-icons/io';
import { connect } from "react-redux";

const FaqTable = (props) => {

    let count = 0;

    const tab = props.tab;

    const search = props.search;


    const temp = props.state.filter( data => data.content.indexOf(search) > -1 ? {...data} : null );

    
    const faqFilter = temp.filter((data) => {

        if(data.tab === tab || tab === '' && count < 5 * (props.moreCount)) {

            count++;

            return  data.content.indexOf(search) > -1 ,

                     {...data}; 
            

        }else{

            return null
        }

        
    })
    
    let showNoData = faqFilter.length === 0  ? <tr><td>등록된 내용이 없습니다.</td></tr> : '';

    return(
        <tbody className="faq_small_table_show">
            {showNoData}
        {
            faqFilter.map((data) => {
                
                return ( 
                <tr key={data.id}>
                    <td><span className="faq_logo">Q</span></td>
                    <td>{data.tab}</td>
                    <td>{data.content}</td>
                    <td><IoIosArrowForward /></td>
                </tr>
                )
           
            })
        }
      </tbody>

    )
}

function faqDataProps(state){

    return {
        state : state.faqData
    }

}

export default connect(faqDataProps)(FaqTable);