import React from 'react';
import './app.css'
import './component/footer.css';
import axios from 'axios'
import './reset.css'
// import Recom from './component/recom'

import Footer from './component/footer';
import {Switch,Route,NavLink} from 'react-router-dom'
import FM from './component/FM'
import Recom from './component/recom'
import Song from './component/song'
import Rank from './component/rank'



axios.defaults.baseURL = 'http://localhost:3000'
// import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        // super 
        super(props);
        this.state = {
            date: new Date(),
            email: '',
            pwd: '',
            num: 0,
            list: [{ type: '个性推荐', name: '/recom' }, { type: '主播电台', name: '/fm' }, { type: '排行榜', name: '/rank' }, {type: '歌单',name:'/song'}],
            imageUrl:[],
            recomList: [],
            imgHeight: 176,
            data: [1, 2, 3]
        };
        this.changeCor = this.changeCor.bind(this)
    }
    componentDidMount() {
       
        
    }
    changeCor(index) {
        
    }
    
    render() {
        const homeList = this.state.list
        return (
                <div>
                    <Footer />
                    <ul className='list'>
                        {
                            homeList.map((todo, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={todo.name}><span>{todo.type}</span></NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Switch>
                        <Route exact path='/recom' component={Recom}></Route>
                        <Route path='/fm' component={FM}></Route>
                        <Route path='/rank' component={Rank}></Route>
                        <Route path='/song' component={Song}></Route>
                    </Switch>
                </div>
        )
    }
}
export default App