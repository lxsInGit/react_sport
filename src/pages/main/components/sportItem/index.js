import React, { Component } from 'react';
import './index.css'


class SportItem extends Component {
    render() {
        const listIt = this.props.sport
        return <div className='sportItem'>
            <ul className='sportUl'>
            {
                listIt.map((item,index)=>{
                   return <li key={item.ID}>
                       <i className={'iconfont '+item.filtertype}></i>
                        {item.CategoryName}
                   </li>
                })
            }
            </ul>
        </div>
    }
}
export default SportItem;

