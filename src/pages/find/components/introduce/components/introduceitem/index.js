import React, { Component } from 'react';

class IntroItem extends Component {
    render() {
        let Arr = this.props.itemArr
     
        return <div>
            {
               Arr!=null?(Arr.map((item, index) => {
                    return <div className='introduce-item' key={item.tre_id}>
                        {item.tre_img ? (<div className='introduce-item-title'>
                            <img src={item.tre_img[0].url} alt={item.tre_img[0].attach_id} />
                        </div>) : ''}
                        <div className='introduce-item-content'>
                            <div className='description'>{item.tre_descr}</div>
                            <div>
                                <div className='user-icon' key={item.user.name}>

                                    {
                                        item.user.headimgurl ? <img src={item.user.headimgurl[0].url} alt={item.user.headimgurl[0].attach_id} /> : <img src='' alt='' />
                                    }
                                    <span>{item.user.show_name}</span>
                                </div>
                                <div>
                                    <i></i>
                                    {item.goodCnt}
                                </div>
                            </div>
                        </div>
                    </div>


                }) ): ''
            }
        </div>
    }
}
export default IntroItem;

