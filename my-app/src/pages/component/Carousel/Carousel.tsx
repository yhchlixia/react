import React, { useEffect, useState } from 'react';
import { chooseAlipayContact } from 'remax/ali';
import './Carousel.less'

import { Button, Swiper } from 'annar';


interface Image {
    url: string;
    name?: string;
    bgColor?: string;
}

interface ICarousel {
  images: Image[],
  height?: string,
  timeOut?: number,
  indicatorLook?: any,
}

const Carousel = (props: ICarousel) => {
    const [image, setImage] = useState(0)

    const baseItemStyle = {
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '36px',
        height: '100%'
      };
    
    return (
        <div className="carousel">
            <Swiper autoplay indicatorLook={props.indicatorLook || 'dark'} height={props.height || '300px'}> 
                {
                    props.images && props.images.map((item: any, index: any) => {
                        return (
                            <Swiper.Item key={index} style={baseItemStyle}>
                                <div className={'carousel-item'} style={{backgroundColor: item.bgColor}}>
                                    <img className="carousel-img" src={item.url} alt="未找到图片"/>
                                </div>
                            </Swiper.Item>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Carousel;