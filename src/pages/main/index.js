import React,{Component} from 'react';
import SearchBal from './components/searchbar'
import axios from 'axios'
import LunBo from './components/lunbo';
import SportItem from './components/sportItem'
import WeiNiSelected from './components/weiniselected'
import Top5 from './components/top5'
import './index.css'

class Main extends Component{
    constructor(){
        super();
        this.state={
            lunbo:[],
            sportItem:[],
            top5:[],
            weiniselected:[]
        }
    }
    componentDidMount() {
        axios.get('https://www.jvhv.com/siteindex.php/Index/Index.html').then((res) => {
            //console.log(res)
            this.setState({
                lunbo: res.data.data.top_ad.list,
                sportItem: res.data.data.iconList,
                top5: res.data.data.CourseTop5,
                weiniselected: res.data.data.CourseforYou

            })
        })
       
    }
    render(){
    return<div className='maincontainer'>
        <SearchBal />
        <LunBo lun={this.state.lunbo}/>
        <SportItem sport={this.state.sportItem}/>
        <WeiNiSelected weini={this.state.weiniselected}/>
        <Top5 top={this.state.top5}/>
    </div>
    }
}
export default Main;