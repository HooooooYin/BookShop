import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import {Link} from 'react-router-dom'

export class GoodUser extends React.Component{
    render(){
      return(
        <ul className="gooduser" >
          <h2>{this.props.title}</h2>
          {this.props.users.map((user) => 
            <li key={user.user_id}>
              <Link to = {`/users/${user.user_id}`}>
                <img src={user.icon}/>
              </Link>
            </li>
          )}
          
        </ul>
      );
    }
  }