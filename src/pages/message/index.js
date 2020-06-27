import React,{Component} from 'react';
import LoginNeed from './components/loginNeed'
class Message extends Component{
    constructor(){
        super();
        this.state={
            logType:false
        }
    }
    render(){
        let type =this.state.logType
    return(
        type?<div>消息22</div>:<LoginNeed/>
    )
    
    }
}
export default Message;

