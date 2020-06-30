import React,{Component} from 'react';

import './index.css'

class Concern extends Component{
    constructor(){
        super();
        this.state={
            concern:[]
        }
    }
    render(){
    return <div>
        {this.state.concern.length!==0?(<div>关注</div>):<div className='concern_div'><img src='/wap/static/images/none.svg' alt='cern'/></div>}
        </div>
    }
}
export default Concern;

