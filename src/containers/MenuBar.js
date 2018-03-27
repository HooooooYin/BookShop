import React from 'react'
import ReactDOM from 'react-dom'
import {UserBar} from '../components/UserBar'
import {SortBar} from '../components/SortBar'
import SearchBar from '../components/SearchBar'
import '../index.css'
import { set_register, set_login, SET_LOGIN, SET_REGISTER } from '../actions'
import { connect } from 'react-redux';
import {mapDispatchToProps} from '../store'
import LoginDialog from '../components/LoginDialog'
import {RegisterDialog} from '../components/RegisterDialog'

class MenuBar extends React.Component{
    render(){
      if(this.props.login){
        return(
          <div>
            <LoginDialog 
              onUsername = {this.handleUserName}
              onLogin = {this.props.onLogin.bind(this, false)}
              setUser = {this.props.setUser.bind(this)} />
            <div className="menubar">
              <UserBar username = {this.props.user.user_name} 
              onLogin = {this.props.onLogin.bind(this,true)}
              onRegister = {this.props.onRegister.bind(this, true)} />
              <SearchBar />
              <SortBar />
            </div>
          </div>
        );}
        if(this.props.register){
          return(
            <div>
              <RegisterDialog 
                onUsername = {this.handleUserName}
                onRegister = {this.props.onRegister.bind(this, false)}
                setUser = {this.props.setUser.bind(this)}  />
            <div className="menubar">
              <UserBar username = {this.props.user.user_name} 
              onLogin = {this.props.onLogin.bind(this,true)}
              onRegister = {this.props.onRegister.bind(this, true)} />
              <SearchBar />
              <SortBar />
            </div>
          </div>
        );}
        return(
          <div className="menubar">
              <UserBar username = {this.props.user.user_name} 
              onLogin = {this.props.onLogin.bind(this,true)}
              onRegister = {this.props.onRegister.bind(this, true)} />
              <SearchBar />
              <SortBar />
            </div>
        );
  }
  }
  function select(state){
    return{
      login: state.login,
      register: state.register,
      user: state.user
    }
  }
  export default connect(select, mapDispatchToProps)(MenuBar)