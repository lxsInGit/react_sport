import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import SameCityItem from './components/samecityitem'

class SameCity extends Component {
    constructor() {
        super();
        this.state = {
            sameCityleftArr: [],
            sameCityrightArr: []
        }
    }
    componentDidMount() {
        axios.post('https://www.jvhv.com/siteindex.php/Trends/SameCity.html').then((res) => {
            let sameCityArr = res.data.data.list;
            let sameCityLeftArr = [];
            let sameCityRightArr = [];
            for (let i = 0; i < sameCityArr.length; i++) {
                if (i % 2 === 0) {
                    sameCityLeftArr.push(sameCityArr[i]);
                } else {
                    sameCityRightArr.push(sameCityArr[i]);
                }
            }
            this.setState({
                sameCityleftArr: sameCityLeftArr,
                sameCityrightArr: sameCityRightArr
            })
        })
    }
    //item.user.headimgurl[0].url --出现报错,可能是数组中有undefind的数据 --判断一下是否存在数组
    render() {
       const leftArrD1 = this.state.sameCityleftArr
       const rightArrD1 = this.state.sameCityrightArr
        return <div className='introduce'>
            <div className='introduce-box-left'>
                <SameCityItem itemArr1={leftArrD1}/>
            </div>
            <div className='introduce-box-right'>
            <SameCityItem itemArr1={rightArrD1}/>
            </div>
        </div>
    }
}
export default SameCity;

