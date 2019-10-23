import React,{Component} from 'react';
import './main.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
        <div>
            <ul>
                <li>热门歌曲</li>
                <li>个人中心</li>
            </ul>
        </div>
        )
    }
}