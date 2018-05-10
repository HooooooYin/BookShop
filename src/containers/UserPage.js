import React from 'react'
import {BookList} from '../components/BookList'
import '../index.css'
import { connect } from 'react-redux';
import { User } from '../store';

class UserPage extends React.Component{
    componentWillMount(){
        this.props.userRequest(this.props.match.params.user_id, this.props.token)
    }

    render(){
        if((typeof(this.props.data) !== 'undefined')){
            return(
                <div className = "userpage" >
                    <div className="user_detail" >
                        <div className="user_info" >
                            <img src={this.props.data.icon}/>
                            <div>
                                <h2>{this.props.data.user_name}</h2>
                                <p> 学校： {this.props.data.school}</p>
                                <p> 专业： {this.props.data.major} </p>
                                <p> 年级： {this.props.data.grade}</p>
                                <p> 电话： {this.props.data.phone_num}</p>
                                <p> 微信： {this.props.data.wechat_id} </p>
                                <p> qq: {this.props.data.qq} </p>
                                <p> 评分： {this.props.data.score} </p>
                            </div>
                        </div>
                    </div>
                    <div className = "user_books" >
                        <p className = "user_books_title" >上架的书籍</p>
                        {this.props.data.user_books === undefined ? null : <BookList results = {this.props.data.user_books} />}
                    </div>
                </div>
            );
        }
        else {
            return <div className = "loading" >
                <img src={require('../images/loading.png')}/>
              </div>
        }
    }
}

function select(state){
    return{
        data: state.data,
        token: state.user.token
    }
}

export default connect(select, User)(UserPage)