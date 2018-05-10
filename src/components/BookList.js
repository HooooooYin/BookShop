import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import {Link} from 'react-router-dom'

export class BookList extends React.Component{
    render(){
      return(
        <ul className="booklist" >
          {this.props.results.map((result) => {
            return(
              <li key = {result.book_id}>
                <div>
                  <img src = {result.photo_url} />
                </div>
                <p>
                  <Link to = {`../books/${result.book_id}`}>{result.book_title}</Link>
                  <span>价格：{result.book_price}</span>
                </p>
              </li>
            );
          })}
        </ul>
      );
    }
  }