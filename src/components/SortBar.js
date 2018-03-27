import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import {Link} from 'react-router-dom'

export class SortBar extends React.Component{
    render(){
      return(
        <div className="sort" >
            <button className="sort-button">
              <Link to ="/">首页</Link>
            </button>
            <button className="sort-button">
              <a href="#">分类</a>
            </button>
            <button className="sort-button">
              <a href="#">分类</a>
            </button>
            <button className="sort-button">
              <a href="#">分类</a>
            </button>
            <button className="sort-button">
              <a href="#">分类</a>
            </button>
            <button className="sort-button">
              <a href="#">分类</a>
            </button>
            <button className="sort-button">
              <a href="#">分类</a>
            </button>
          </div>
      );
    }
  }