import React, { Component } from 'react';
import './index.css'

//引入推介关注等组件
import Introduce from './components/introduce'
import Concern from './components/concern'
import SameCity from './components/sameCity'

class Find extends Component {
    constructor() {
        super();
        this.state = {
            findTabBarlists: [{v:'推介',type:true},{v:'关注',type:false},{v:'同城',type:false}],
            currentIndex: 0
        }
    }
    tabShow = (value) => {
        let items = this.state.findTabBarlists
       for (let i=0;i<items.length;i++){
            items[i].type=false
       }
       items[value].type = true;  
        this.setState({
            currentIndex: value,
            findTabBarlists:items
        })
        //console.log(this.state.findTabBarlists)
    
    }
    render() {
        const findList = this.state.findTabBarlists
        const current = this.state.currentIndex
        return <div>
            <div className='find-head'>
                <div>发现</div>
            </div>
            <ul className='find_list_qiehuan'>
                {
                    findList.map((item, index) => {
                        return <li key={index} onClick={this.tabShow.bind(this,index)}>
                            <div><span className={item.type?'find_active':''}>{item.v}</span></div>
                        </li>
                    })
                }
            </ul>
            <div className='find_data_list'>
                {
                    (() => {
                        switch (current) {
                            case 0:
                                return <Introduce />;
                            case 1:
                                return <Concern />; 
                            case 2:
                                return <SameCity />;
                            default:
                                return <Introduce />;
                        }
                    })()
                }
            </div>
        </div>
    }
}
export default Find;

