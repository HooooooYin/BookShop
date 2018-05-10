import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import { connect } from 'react-redux';
import { setSort } from '../store';
import {Link, withRouter} from 'react-router-dom'


class SortBar extends React.Component{
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
      let token = this.props.user? this.props.user.token: '';
      let data = {
        key: e.target.innerText,
        page_num: 1,
        token: token
      }
      this.props.getSearchParams(data);
      this.props.history.push('/books/search_result');
      window.location.reload();
    }
    render(){
      return(
        <div className="sort" >
            <button className="sort-button">
              <Link to ="/">首页</Link>
            </button>
            <button className="sort-button" onClick = {this.handleClick}>
              <div  >网络工程</div>
            </button>
            <button className="sort-button" onClick = {this.handleClick}>
              <div>新闻学</div>
            </button>
            <button className="sort-button" onClick = {this.handleClick}>
              <div>软件工程</div>
            </button>
            <button className="sort-button" onClick = {this.handleClick}>
              <div>历史学</div>
            </button>
            <button className="sort-button" onClick = {this.handleClick}>
              <div>英语</div>
            </button>
            <button className="sort-button" onClick = {this.handleClick}>
              <div>嵌入式</div>
            </button>
          </div>
      );
    }
  }

  
function select(state){
  return {
    user: state.user
  }
}

export default withRouter(connect(select, setSort)(SortBar))