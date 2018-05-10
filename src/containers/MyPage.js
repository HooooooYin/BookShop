import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import {BookList} from '../components/BookList'
import SetImage from '../components/SetImage'
import { connect } from 'react-redux';
import { setList, Personal } from '../store';
import OrderList from '../components/OrderList'
import {MyComment} from '../components/MyComment'
import axios from 'axios'

class MyPage extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          changeInfo: false,
          uploadedFile: null,
      };
      this.onChangInfo = this.onChangInfo.bind(this);
      this.onImageChange = this.onImageChange.bind(this);
      this.onListChange = this.onListChange.bind(this);
      this.updateInfo = this.updateInfo.bind(this);
  }

  componentWillMount(){
    let token = this.props.user? this.props.user.token: ''
    this.props.personalRequest(token);
  }

  updateInfo(){
    let user_name = document.getElementById('user_name_info').value;
    let school = document.getElementById('school_info').value;
    let major = document.getElementById('major_info').value;
    let grade = document.getElementById('grade_info').value;
    let phone_num = document.getElementById('phone_num_info').value;
    let wechat_id = document.getElementById('wechat_id_info').value;
    let qq = document.getElementById('qq_info').value;
    let info = {
      user_name: user_name !== ''? user_name : this.props.data.information.user_name,
      school: school !== ''? school: this.props.data.information.school,
      major: major !== ''? major : this.props.data.information.major,
      grade: grade !== ''? grade : this.props.data.information.grade,
      phone_num: phone_num !== ''? phone_num : this.props.data.information.phone_num,
      wechat_id: wechat_id !== ''? wechat_id : this.props.data.information.wechat_id,
      qq: qq !== ''? qq : this.props.data.information.qq,
    }
    this.props.setInfo(info, this.props.user.token);
    this.setState(prevState => ({
      changeInfo: !prevState.changeInfo,
  }));
  }

  onChangInfo(change){
    this.setState(prevState => ({
        changeInfo: !prevState.changeInfo,
        image: this.props.data.information.icon
    }));
  }

  onImageChange(){
    console.log(this.props.upload_url)
    // axios.defaults.headers['Authorization'] = `token:${this.props.user.token}`;
    // axios.post('/users/icon', {
    //   icon: this.state.image
    // }).then((res) => {
    //   if(res.status === 201){
    //     this.props.updateToken(res.data.token)
    //   }
    //   else{
    //     alert(res.data.message)
    //   }
    // }).catch((error) => {
    //   if(error.response){
    //     alert(error.response.data.message)
    //   }
    //   else{
    //     alert(error.message)
    //   }
    // })
  }

  onListChange(e){
    this.props.setListOn(e.target.value);
  }

  render(){
      if((typeof(this.props.data) !== 'undefined') && (typeof(this.props.data.information) !== 'undefined')){
        if(!this.state.changeInfo){
          return(
            <div className = "userpage" >
                <div className="user_detail" >
                    <div className="user_info" >
                        <img src={this.props.data.information.icon}/>
                        <div>
                            <h2>{this.props.data.information.user_name}</h2>
                            <p> {`学校: ${this.props.data.information.school}`}</p>
                            <p> {`专业: ${this.props.data.information.major}`} </p>
                            <p> {`年级: ${this.props.data.information.grade}`}</p>
                            <p> {`电话： ${this.props.data.information.phone_num}`} </p>
                            <p> {`微信： ${this.props.data.information.wechat_id}`} </p>
                            <p> {`QQ: ${this.props.data.information.qq}`} </p>
                            <p> {`评分： ${this.props.data.information.score}`} </p>
                        </div>
                    </div>
                    <button onClick = {this.onChangInfo} >修改个人信息</button>
                </div>
                <div className = "mybook" >
                  <ul>
                    <li className = {this.props.liston[0]} value = "0" onClick = {this.onListChange} >个人收藏</li>
                    <li className = {this.props.liston[1]} value = "1" onClick = {this.onListChange} >我的订单</li>
                    <li className = {this.props.liston[2]} value = "2" onClick = {this.onListChange} >我上架的书籍</li>
                    <li className = {this.props.liston[3]} value = "3" onClick = {this.onListChange} >我发出的评论</li>
                  </ul>
                  <div className = {`showlist ${this.props.liston[0]}`} >
                    <BookList results = {this.props.data.favor_books} />
                  </div>
                  <div  className = {`showlist ${this.props.liston[1]}`}  >
                    <OrderList orders = {this.props.data.order_book} />
                  </div>
                  <div  className = {`showlist ${this.props.liston[2]}`}  >
                    <BookList results = {this.props.data.upload_books} />
                  </div>
                  <div  className = {`showlist ${this.props.liston[3]}`}  >
                    <MyComment comments = {this.props.data.comments} />
                  </div>
                </div>
            </div>
          );
        }
        else{
          if(typeof(this.props.data.information))
          return(
            <div className = "userpage" >
                <div className="user_detail" >
                    <div className="user_info" >
                      <SetImage url = {this.props.data.information.icon} onImageChange = {this.onImageChange} />
                      <div>
                        <h2>
                          用户名：
                          <input type="text" id = "user_name_info"  placeholder={this.props.data.information.user_name} />
                        </h2>
                        <p>
                          学校：
                          <input type="text" id = "school_info"  placeholder={this.props.data.information.school} /> 
                        </p>
                        <p>
                          专业：
                          <input type="text" id = "major_info"  placeholder={this.props.data.information.major} /> 
                        </p>
                        <p>
                          年级：
                          <input type="text" id = "grade_info"  placeholder={this.props.data.information.grade} /> 
                        </p>
                        <p>
                          电话：
                          <input type="text" id = "phone_num_info"  placeholder={this.props.data.information.phone_num} /> 
                        </p>
                        <p>
                          微信：
                          <input type="text" id = "wechat_id_info"  placeholder={this.props.data.information.wechat_id} /> 
                        </p>
                        <p>
                          QQ：
                          <input type="text" id = "qq_info"  placeholder={this.props.data.information.qq} /> 
                        </p>
                        <p> {`评分： ${this.props.data.information.score}`} </p>
                      </div>
                    </div>
                    <div className = "setuser_button" >
                      <button onClick = {this.updateInfo} >确定</button>
                      <button onClick = {this.onChangInfo} >取消</button>
                    </div>
                </div>
                <div className = "mybook" >
                  <ul>
                    <li className = {this.props.liston[0]} value = "0" onClick = {this.onListChange} >个人收藏</li>
                    <li className = {this.props.liston[1]} value = "1" onClick = {this.onListChange} >我的订单</li>
                    <li className = {this.props.liston[2]} value = "2" onClick = {this.onListChange} >我上架的书籍</li>
                    <li className = {this.props.liston[3]} value = "3" onClick = {this.onListChange} >我发出的评论</li>
                  </ul>
                  <div className = {`showlist ${this.props.liston[0]}`}>
                    <BookList results = {this.props.data.favor_books} />
                  </div>
                  <div  className = {`showlist ${this.props.liston[1]}`}  >
                    <OrderList orders = {this.props.data.order_book} />
                  </div>
                  <div className = {`showlist ${this.props.liston[2]}`}>
                    <BookList results = {this.props.data.upload_books} />
                  </div>
                  <div  className = {`showlist ${this.props.liston[3]}`}  >
                    <MyComment comments = {this.props.data.comments} />
                  </div>
                </div>
            </div>
          );
        }
      }
      else{
        return <div className = "loading" >
            <img src={require('../images/loading.png')}/>
          </div>
      }
  }
}

function select(state){
  return{
    liston: state.liston,
    data: state.data,
    user: state.user,
    image: state.upload_url
  }
}

export default connect(select, Personal)(MyPage);

