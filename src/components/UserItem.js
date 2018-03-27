import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import {Link} from 'react-router-dom'


export class UserItem extends React.Component{
    render(){
        return(
            <ul className="useritem" >
                {this.props.results.map((result) => {
                    return(
                        <li key = {result.user_id}>
                            <img src={result.icon} />
                            <div>
                                <Link to = {`/show/user/${result.user_id}`} >
                                    <h3>{result.user_name}</h3>
                                </Link>
                                <p>
                                    {`${result.school}   ${result.major}`}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

