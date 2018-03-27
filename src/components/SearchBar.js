import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { setSearch } from '../store';
import axios from 'axios'
import '../mock'
class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  handleOptions(){
    let options = document.getElementById('options');
    this.props.setOptions(`/${options.value}/search_result`)
  }


handleSearch(){
    let options = document.getElementById('options');
    let text = document.getElementById('searchtext');
    let token = this.props.user? this.props.user.token: ''
    let data = {
      key: text.value,
      page_num: 1,
      token: token
    }
    this.props.getSearchParams(data);
  }
  render(){
    return(
      <div className="searchbar" >
          <div className="search">
            <span>
              <input type="text" name="search" placeholder="Search..." id = "searchtext" />
            </span>
            <span>
              <select name="sort" id = "options" onChange = {this.handleOptions} >
                <option value="books">书籍</option>
                <option value="users">用户</option>
                <option value="books">专业</option>
              </select>
            </span>
            <span>
              <Link to = {this.props.search_url} >
                <button className="search-button" onClick = {this.handleSearch} >搜索</button>
              </Link>
            </span>
          </div>
          <div className="hotkey" >
            <p> 热搜： 商品 商品 商品 商品 商品</p>
          </div>
      </div>
    );
  }
}

function select(state){
  return {
    search_url: state.search_url,

  }
}

export default connect(select, setSearch)(SearchBar)