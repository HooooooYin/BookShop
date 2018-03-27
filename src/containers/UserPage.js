import React from 'react'
import {BookList} from '../components/BookList'
import '../index.css'
import { connect } from 'react-redux';
import { User } from '../store';

class UserPage extends React.Component{
    componentWillMount(){
        this.props.userRequest(this.props.match.params.user_id)
        console.log(this.props.data)
    }

    render(){
        if((typeof(this.props.data) !== 'undefined') && (typeof(this.props.data.other) !== 'undefined')){
            return(
                <div className = "userpage" >
                    <div className="user_detail" >
                        <div className="user_info" >
                            <img src={this.props.data.other.icon}/>
                            <div>
                                <h2>{this.props.data.other.user_name}</h2>
                                <p> 学校： {this.props.data.other.school}</p>
                                <p> 专业： {this.props.data.other.major} </p>
                                <p> 年级： {this.props.data.other.grade}</p>
                                <p> 电话： {this.props.data.other.phone_num}</p>
                                <p> 微信： {this.props.data.other.wechat_id} </p>
                                <p> qq: {this.props.data.other.qq} </p>
                                <p> 评分： {this.props.data.other.score} </p>
                            </div>
                        </div>
                    </div>
                    {this.props.data.other.book === undefined ? null : <BookList results = {this.props.data.other.book} />}
                </div>
            );
        }
        else return null;
    }
}

function select(state){
    return{
        data: state.data
    }
}

export default connect(select, User)(UserPage)