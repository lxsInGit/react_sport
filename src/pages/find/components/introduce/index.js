import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import IntroItem from './components/introduceitem'

class Introduce extends Component {
    constructor() {
        super();
        this.state = {
            leftArr: [],
            rightArr: []
        }
    }
    componentDidMount() {
        axios.get('https://www.jvhv.com/siteindex.php/Trends/Index.html').then((res) => {
            let introduceArr = res.data.data.list;
            let introduceLeftArr = [];
            let introduceRightArr = [];
            for (let i = 0; i < introduceArr.length; i++) {
                if (i % 2 === 0) {
                    introduceLeftArr.push(introduceArr[i]);
                } else {
                    introduceRightArr.push(introduceArr[i]);
                }
            }
            this.setState({
                leftArr: introduceLeftArr,
                rightArr: introduceRightArr
            })
        })
    }
    //item.user.headimgurl[0].url --出现报错,可能是数组中有undefind的数据 --判断一下是否存在数组
    render() {
        const leftArrD = this.state.leftArr
        const rightArrD = this.state.rightArr
        return <div className='introduce'>
            <div className='introduce-box-left'>
                <IntroItem itemArr={leftArrD}/>
            </div>
            <div className='introduce-box-right'>
            <IntroItem itemArr={rightArrD}/>
            </div>
        </div>
    }
}
export default Introduce;

