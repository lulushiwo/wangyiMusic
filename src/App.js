import React from 'react';
import './app.css'
import './component/footer.css';
import axios from 'axios'
import './reset.css'
import { Carousel } from 'antd-mobile';
import Footer from './component/footer'
axios.defaults.baseURL = 'http://localhost:3000'
// import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            email: '',
            pwd: '',
            num: 0,
            list:['个性推荐','主播电台','排行榜','歌单'],
            imageUrl:[],
            recomList: [],
            imgHeight: 176,
            data: [1, 2, 3]
        };
        this.changeCor = this.changeCor.bind(this)
    }
    componentWillMount() {
        axios.get('/banner')
        .then(res => {
            // console.log(res.data.banners[0].imageUrl);
            this.setState({ imageUrl: res.data.banners})
            
        })
        axios.get('/personalized?limit=6')
        .then(res => {
            console.log(res.data.result);
            this.setState({ recomList: res.data.result})
        })
    }
    changeCor(index) {
        
    }
   
    render() {
        const homeList = this.state.list
        return <div>
            <Footer />
            <ul className='list'>
                {
                    homeList.map((todo, index) => {
                        return (
                            <li key={index}>
                                <span className={this.state.num === index ?'active':''}> {todo}</span>
                            </li>
                        )
                    })
                }
            </ul>
           
            <div className='bar'>
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {
                            this.state.imageUrl.map((todo,index) => {
                                return(
                                    <img key={index} src={todo.imageUrl} alt=''></img>
                                )
                            })
                        }
                    </Carousel>
            </div>
            <div className='recom'>
                <div className='recomTitle'>
                    <h3>推荐歌单</h3>
                    <span>歌单广场</span>
                </div>
                <ul className='recomList'>
                    {
                        this.state.recomList.map((todo,index) => {
                            return(
                                <li key={index}>
                                    <img src={todo.picUrl} alt=''></img>
                                    <span>{todo.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    }
}
export default App