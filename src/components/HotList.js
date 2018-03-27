import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import {Link} from 'react-router-dom'

export class HotList extends React.Component{
    render(){
      return(
        <ul className="hotlist" >
          <h2>{this.props.title}</h2>
          {this.props.images.map((image) => 
            <li key={image.book_id}>
              <Link to = {`/books/${image.book_id}`}>
                <img src={image.photo_url}/>
              </Link>
            </li>
          )}
          
        </ul>
      );
    }
  }