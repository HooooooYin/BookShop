import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'

export class SortList extends React.Component{
  
    render(){
      return(
        <ul className="sortlist" >
          <h2>分类</h2>
          {this.props.sorts.map((sort, index) => 
            <li key={index}>
              <a href="#" >{sort}</a>
            </li>
          )}
        </ul>
      );
    }
  }
  