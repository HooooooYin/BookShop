import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'

export class MyComment extends React.Component{
    render(){
        return(
            <div>
                {this.props.comments.map((comment) => {
                return(     
                    <div className = "mycomment" >
                        <Link to = {`/books/${comment.book_id}`} key = {comment.book_id} >
                            <p>{`我在${comment.book_title}下的留言：`}</p>
                            <br/>
                            <p>{comment.text}</p>
                        </Link>
                    </div>
            )})}
            </div>
        )
    }
}