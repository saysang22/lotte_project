import React from "react";

const TableCom = (props) => {

    return (
        <>
        
        <table>
            <tr>
                {
                    props.tds.map((a) => {
                        return(

                            <td>{a}</td>

                        )
                    })
                }
                {/* <td>{props.td1}</td>
                <td></td>
                <td></td> */}
            </tr>
        </table>
        </>
    )
}

export default TableCom;