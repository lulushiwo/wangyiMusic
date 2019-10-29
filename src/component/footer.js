import React from 'react';

import axios from 'axios'



export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
        }
    }
    getWord = (e) => {
        this.setState({value: e.target.value})
    }
    searchMusic = (e) => {
        if (e.keyCode === 13) {
            axios.post('/search',{
                keywords:this.state.value
            })
            .then(res =>{
                console.log(res);
                this.setState({value:''})
            })
        } 
        
    }
    render() {
        return <div className='footer'>
            <i className='iconfont icon-huabankaobei-'></i>
            <div className='search' onKeyDown={this.searchMusic}>
                <i className='iconfont icon-sousuo3'></i>
                <input type='text' value={this.state.value} placeholder='搜索音乐、歌词、电台' autoFocus onChange={this.getWord}></input>
            </div>
            <i className='iconfont icon-liebiao'></i>
            
        </div>
    }
}

