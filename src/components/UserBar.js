import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import {Link} from 'react-router-dom'

export class UserBar extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      if(!this.props.username){
        return(
          <div className="userbar" >
            <p>
              欢迎光临，请<a 
              href="#" 
              onClick = {this.props.onLogin} >
                登录
              </a> 
              {'或'}
              <a href="#" 
              onClick = {this.props.onRegister} >
                成为会员
              </a>
            </p>
          </div>
        );
      }else{
        return(
          <div className="userbar" >
            <p>
              欢迎光临，{this.props.username}
              <Link to = "/users/information" className="shopping" >个人中心</Link>
              {'  '}
              <Link to = "/books" className="shopping" >上架书籍</Link>
              {'  '}
              <a href="#" onClick = {this.props.onModify} >修改密码</a>
              {'  '}
              <a href="#" onClick = {this.props.onCancel} >撤销</a>
            </p>
          </div>
        );
      }
    }
  }