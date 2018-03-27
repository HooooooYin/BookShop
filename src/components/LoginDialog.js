import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {Login} from '../store'

class LoginDialog extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        modify: false
      }
      this.handleUserNameChange = this.handleUserNameChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onModify = this.onModify.bind(this);
      this.modifyPassword = this.modifyPassword.bind(this);
    }
    handleUserNameChange(e){
      this.handleUserName(e.target.value);
    }

    onModify(modifying){
      this.setState({
        modify: modifying
      })
    }

    modifyPassword(){
      let email = document.getElementById('modify_email').value;
      let password = document.getElementById('old_password').value;
      let password1 = document.getElementById('new_password1').value;
      let password2 = document.getElementById('new_password2').value;
      if(password1 !== password2){
        alert('请两次输入同一个密码');
        return ;
      }
      this.props.modify(this.props.token, password, password1, password2);
      this.setState({
        modify: false
      })
    }

    onSubmit(){
      let email = document.getElementById('login_email');
      let password = document.getElementById('login_password')
      axios.post('/users/token', {
        email: email.value,
        password: password.value
      }).then((res) => {

        if(res.data.error_code === 200){

          this.props.setUser(res.data.user)
        }
      })
      this.props.onLogin(false);
    }

    render(){
      if(!this.state.modify){
        return(
          <div className = "dialog">
            <div >
              <h1>登录</h1>
              <p>
                <label htmlFor="e-mail" > E-mail: </label>
                <input type="email" name="e-mail" id = "login_email" placeholder="xxxxxx@xx.xx" required />
              </p>
              <p>
                <label htmlFor="password"> 密码: </label>
                <input type="password" name="password" id = "login_password" placeholder="Password" minLength = "8" required />
              </p>
              <p id="dialog-button">
                <button onClick = {this.onSubmit} >确定</button>
                <button onClick = {() => this.onModify(true)} > 修改密码</button>
                <button onClick = {this.props.onLogin}>取消</button>
              </p>
            </div>    
          </div>   
        ); 
      }
      else{
        return(
          <div className = "dialog">
            <div >
              <h1>登录</h1>
              <p>
                <label htmlFor="e-mail" > E-mail: </label>
                <input type="email" name="e-mail" id = "modify_email" placeholder="xxxxxx@xx.xx" required />
              </p>
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
                <button onClick = {() => this.onModify(false)}>取消</button>
              </p>
            </div>    
          </div>    
        );
      }
    }
  }


  function select(state){
    return {
      token: state.user.token
    }
  }

  export default connect(select, Login)(LoginDialog)