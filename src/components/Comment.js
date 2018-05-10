import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import { Link } from 'react-router-dom'

export class Comment extends React.Component{
  render(){
    return(
      <div className = "discussion" >
        <div className = "comment-user" >
          <img src={require('../images/timg.jpg')}/>
          <Link to = {`/users/${this.props.user_id}`}>
            {this.props.user}
          </Link>
        </div>
        <div className = "comment" > 
          <div>
            {this.props.text}
          </div>
          <span>
            {this.props.time}
          </span>
        </div>
      </div>
    );
  }
}