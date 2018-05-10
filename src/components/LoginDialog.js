import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {Login} from '../store'
import {withRouter} from "react-router-dom"

class LoginDialog extends React.Component{
    constructor(props){
      super(props);
      this.handleUserNameChange = this.handleUserNameChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    handleUserNameChange(e){
      this.handleUserName(e.target.value);
    }


    onSubmit(){
      let email = document.getElementById('login_email');
      let password = document.getElementById('login_password')
      axios.post('/bookshop/users/token', {
        email: email.value,
        password: password.value
      }).then((res) => {
        if(res.status === 200){
          this.props.setUser(res.data)
          this.props.history.push('../');
          window.location.reload()
        }
      }).catch((err) => {
        if(err.response){
          alert(err.response.data.message)
        }
        else{
          alert(err.message)
        }
      })
      this.props.onLogin(false);
    }

    render(){
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
              <button onClick = {this.props.onLogin}>取消</button>
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

export default withRouter(connect(select)(LoginDialog))