import React, { Component } from 'react';
import './index.css'

class Top5 extends Component {
    render() {
        const Top5It = this.props.top
        return <div className='Top5Item'>

            <ul className='top5Ul'>
                <div>本周最受欢迎TOP5</div>
                {
                    Top5It.map((item, index) => {
                        return <li key={item.pro_id}>
                            <div><img src={item.pro_img[0].url} alt={item.pro_name}/></div>
                            <div>
                                {item.pro_name}
                                <div>
                                {item.pro_Joiner}已参加
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}
export default Top5;

