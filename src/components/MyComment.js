import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'

export class MyComment extends React.Component{
    render(){
        return(
            <div>
                {this.props.comments.map((comment, index) => {
                return(     
                    <div className = "mycomment" key = {index} >
                        <Link to = {`/books/${comment.book_id}`}  >
                            <p>我在<span>{comment.book_title}</span>下的留言：</p>
                            <br/>
                            <p>{comment.text}</p>
                        </Link>
                    </div>
            )})}
            </div>
        )
    }
}