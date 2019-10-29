import React,{Component} from 'react';
import axios from 'axios';
import { Carousel } from 'antd-mobile';


export default class recom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recomList: [],
            imageUrl: []
        }
    }
    componentDidMount() {
        axios.get('/personalized?limit=6')
            .then(res => {
                // console.log(res.data.result);
                this.setState({ recomList: res.data.result })
            })
        axios.get('/banner')
            .then(res => {
                // console.log(res.data.banners[0].imageUrl);
                this.setState({ imageUrl: res.data.banners })

            })
    }
    filterNum = (num) => {
        const index = 10000;
        if (num - index > 0) {
            const count = parseInt(num / index)
            return count + '万';
        } else if (num - index === 0) {
            return '1万'
        } else {
            return num
        }
    }
    render() {
        return(
            <div className='recom'>
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {
                            this.state.imageUrl.map((todo, index) => {
                                return (
                                    <img key={index} src={todo.imageUrl} alt=''></img>
                                )
                            })
                        }
                    </Carousel>
                <div className='recomTitle'>
                    <h3>推荐歌单</h3>
                    <span>歌单广场</span>
                </div>
                <ul className='recomList'>
                    {
                        this.state.recomList.map((todo, index) => {
                            return (
                                <li key={index}>
                                    <img src={todo.picUrl} alt=''></img>
                                    <span>{todo.name}</span>
                                    <div className='count'>
                                        <i className='iconfont icon-bofang'></i>
                                        <span>{this.filterNum(todo.playCount)}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
};
