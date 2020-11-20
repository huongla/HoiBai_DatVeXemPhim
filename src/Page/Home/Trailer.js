import React from 'react';
import Style from "../../Css/main.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Trailer() {
    // const renderSlides = () => [1, 2, 3, 4, 5].map(num =>(
    //     <div>
    //         <h3>Slide {num}</h3>
    //     </div>
    // ))
    
    return (
        <div className="trailer">
            
            <Slider dots={true} >
            <div><img src="./img/trailer/trailer_1.png" /></div>
            <div><img src="./img/trailer/trailer_2.png" /></div>
            <div><img src="./img/trailer/trailer_3.png" /></div>
            </Slider>
            
        </div>
    )
}
