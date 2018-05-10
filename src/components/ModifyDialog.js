import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {Modify} from '../store'

class ModifyDialog extends React.Component{
    constructor(props){
        super(props);
        this.modifyPassword = this.modifyPassword.bind(this);
      }
    modifyPassword(){
        let password = document.getElementById('old_password').value;
        let password1 = document.getElementById('new_password1').value;
        let password2 = document.getElementById('new_password2').value;
        if(password1 !== password2){
          alert('请两次输入同一个密码');
          return ;
        }
        this.props.modify(this.props.token, password, password1, password2);
        this.props.onModify(false);
      }
    render(){
        return(
            <div className = "dialog">
              <div >
                <h1>修改密码</h1>
                <p>
                  <label htmlFor="password"> 旧密码: </label>
                  <input type="password" name="password" id = "old_password" placeholder="Password" minLength = "8" required />
                </p>
                <p>
                  <label htmlFor="password"> 新密码: </label>
                  <input type="password" name="password" id = "new_password1" placeholder="Password" minLength = "8" required />
                </p>
                <p>
                  <label htmlFor="password"> 再次输入: </label>
                  <input type="password" name="password" id = "new_password2" placeholder="Password" minLength = "8" required />
                </p>
                <p id="dialog-button">
                  <button onClick = {this.modifyPassword} >确定</button>
                  <button onClick = {() => this.props.onModify(false)}>取消</button>
                </p>
              </div>    
            </div>    
          );
    }
}

function select(state){
    return {
        token: state.user.token
    }
}

export default connect(select, Modify)(ModifyDialog)