import React, { Component } from 'react';
import './index.css'
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.min.css'

class LunBo extends Component {
    componentDidMount() {
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: 2000,
            pagination: '.swiper-pagination',
            observer: true,
            observeParents: true
        })
    }
    render() {
        const data = this.props.lun
        return <div className='swiper-container'>
            <div className="swiper-wrapper">
                {
                    data.map((item, index) => {
                        return <div className='swiper-slide' key={item.adlist_id}>
                            <img src={item.adlist_img} alt={item.adlist_id} />
                        </div>
                    })
                }
            </div>
            <div className="swiper-pagination"></div>
        </div>
    }
}
export default LunBo;

