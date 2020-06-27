import React, { Component } from 'react';
import './index.css'



class WeiNiSelected extends Component {
  
    render() {
      const selectIt=this.props.weini
        return <div className='selectItem'>
            <div style={{fontSize:'20px'}}>为您精选</div>
            <ul className='selectUl'>
            {
                selectIt.map((item,index)=>{
                   return <li key={item.pro_id}>
                       <img src={item.pro_img[0].url} alt={item.pro_name}/>
                       <div className='selectname'> {item.pro_name} </div>
                       <div className='selectchosen'>{item.pro_Joiner}人已参加</div>
                   </li>
                })
            }
            </ul>
        </div>
    }
}
export default WeiNiSelected;

