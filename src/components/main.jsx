import React, { useEffect } from "react";
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward}from 'react-icons/io';
import './main.scss';
import mainBg01 from '../main_01.jpg';
import mainBg02 from '../main_02.jpg';
import mainBg03 from '../main_03.jpg';

const Main = () => {

    useEffect(() => {
        let current = 0;

        let backButton = document.querySelector('.back_button');
        let frontButton = document.querySelector ('.front_button');
        let aniBox = document.querySelector('.backg');
        let firstChild = aniBox.firstElementChild;
        let lastChild = aniBox.lastElementChild;
        let cloneFirst = firstChild.cloneNode(true);
        let cloneLast = lastChild.cloneNode(true);


        // aniBox.appendChild(cloneFirst);
        aniBox.insertBefore(firstChild, aniBox.firstElementChild);

        function slideAni() {
            frontButton.addEventListener('click', function(){
                if(current < 2) {
                    current += 1;
                    aniBox.style.transform = 'translateX(-'+ current +'00vw)';
                }else{
                    current = 2;
                }
            });
            backButton.addEventListener('click', function(){
                // console.log(current);
                if(current > 0) {
                    current -= 1;
                    aniBox.style.transform = 'translateX(-'+ current +'00vw)';//우측으로 이동된 지점으로 부터 돌아갈 지점까지의 거리니까 마이너스를 붙여둔 상태로 하면 됨
                }else{
                    current = 0;
                }
    
            });
    
        }
    
        slideAni();

        let sFlg = true;

        setInterval(() => {

            if(sFlg) {
                current++;
            }else{
                current--;
            }

            // if(current === 2) {

            //     sFlg = true;
            // }
            // aniBox.style.transform = 'translateX(-'+ current +'00vw)';


            if(current === 2 ) {

                sFlg = false;

                aniBox.style.transform = 'translateX(-'+ current +'00vw)';

            } else if(current === 0){

                sFlg = true;
                
            }

            aniBox.style.transform = 'translateX(-'+ current +'00vw)';

            
        },3000);

        // setTimeout(() => {
        //     current = 0;
        //     if(current === 2) {
                
        //         aniBox.style.transform = 'translateX(-'+ current +'00vw)';

        //     }
        // })

    },[]);


    return(
        <div className="main_wrap">
            <div className="text_wrap">
                <h3>롯데호텔 프리미엄 온라인 숍</h3>
                <p>LOTTE HOTEL e-SHOP</p>
                <p>롯데호텔만의 품격 있는 상품이 여러분의
                일상에 가치를 더 해 드립니다.</p>
            </div>
            <div className="backg">
                <div className="slide_box">
                    <img src={mainBg01} alt="mainimg01" />
                </div>
                {/* .slide_box */}
                <div className="slide_box">
                    <img src={mainBg02} alt="mainimg02" />
                </div>
                {/* .slide_box */}
                <div  className="slide_box">
                    <img src={mainBg03} alt="mainimg03" />
                </div>
                {/* .slide_box */}
            </div>
            {/* .backg */}
            <div className="arrow_button_wrap">
                <IoIosArrowBack className="back_button arrow_button"/>
                <IoIosArrowForward className="front_button arrow_button"/>
            </div>
            {/* .arrow_button_wrap */}
        </div>
    )
}

export default Main;