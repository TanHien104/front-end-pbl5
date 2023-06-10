import React, { memo } from 'react';
import Slider from 'react-slick';

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
const SliderCustom = ({ images }) => {
    
    return (
        <div className="w-4/5">
            <Slider {...settings}>
                {images && images?.length > 0 && images?.map((item,index) => {
                    console.log('check item img',item)
                    return (
                        <div key={index} className="bg-black w-full h-[320px] flex justify-center">
                        <img
                            src={item}
                            alt=""
                            className=" h-[320px] m-auto object-contain"
                        />
                    
                        </div>
                    )
                }) }
                
               
            </Slider>
        </div>
    );
};

export default memo(SliderCustom);
