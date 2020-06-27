import React, { Component } from 'react';
import './index.css'

class SearchBar extends Component {
    constructor(){
        super();
        this.state={
            city:'厦门'
        }
    }
    render() {
        return <div className='searchbar'>
            <div className='mainCity'>{this.state.city}	&darr;</div>
            <div className='mainInp'>
                <input placeholder='输入搜索关键词'/>
            </div>
        </div>
    }
}
export default SearchBar;

