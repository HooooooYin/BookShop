import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import {Comment} from '../components/Comment'
import { connect } from 'react-redux';
import {Book} from '../store'
import {Link} from 'react-router-dom'
class BookPage extends React.Component{
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.buyBook = this.buyBook.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getComment = this.getComment.bind(this);
    }

  componentWillMount(){
    this.props.bookRequest(this.props.match.params.book_id);
  }
  handleSubmit(){
    let text = document.getElementById('comment_text').value;
    let time = new Date().toLocaleDateString()+ "  "+new Date().toLocaleTimeString()
    this.props.comment(this.props.token, this.props.match.params.book_id, text, 0, time)
  }

  buyBook(){
    this.props.buyBook(this.props.match.params.book_id, this.props.token)
  }

  saveBook(){
    this.props.saveBook(this.props.match.params.book_id, this.props.token)
  }

  getComment(page_num){
    this.props.getComments(this.props.token, this.props.match.params.book_id, page_num, 0)
  }

  onChange(e){
    console.log(e.target.src)
    this.props.setBookShow(e.target.src)
  }

  render(){ 
    if((typeof(this.props.data) !== 'undefined')  && (typeof(this.props.data.book) !== 'undefined')){ 
      return(
        <div>
          <div className = "bookpage" >
            <div className = "book_image" >
            <div className = "book_image_show">
              <img src = {this.props.bookshow}/> 
            </div>
            <ul>
              {
                this.props.data.book.book_pic.map((image, index) => {
                return(
                    <li key = {index} className = {this.props.bookshow[index]}  value = {index} onClick = {this.onChange} >
                      <img src = {image.photo_url}  /> 
                    </li> 
                ) 
              })}
            </ul>
            </div>
            <div className = "bookdetail" >
              <h1>{this.props.data.book.book_title}</h1>
              <h2>{this.props.data.book.book_name}</h2>
              <Link to = {`/users/${this.props.data.book.book_user_id}`} >卖家： {this.props.data.book.book_user_name}</Link>
              <p>价格: {this.props.data.book.book_price} </p>
              <button onClick = {this.buyBook} >购买</button>
              <button onClick = {this.saveBook} >收藏</button>
              <div className="description" >
                描述:{this.props.data.book.description}
              </div>
            </div>
          </div>
          {
            this.props.data.book.book_comments.map((comment, index) => {
            return(
              <Comment user = {comment.user_name} text = {comment.text} key = {index} user_id = {comment.user_id} time = {comment.time} />
            )
          })}
          <p className = "page" >
            {this.props.data.book.page_num === 1 ? <button  >首页</button> : <button onClick = {() => this.getComment(this.props.data.book.page_num - 1) } >上一页</button>}
            <button onClick = {() => this.getComment(this.props.data.book.page_num + 1) } >下一页</button>
          </p>
        <div className = "discuss" >
        <textarea name="discussion" id = "comment_text" cols="120" rows="10" placeholder = "留言..." ></textarea>
        <button type="submit" onClick = {this.handleSubmit} >发表</button>
        </div>
        </div>
      );
    }
    else return null;
  }
}

function select(state){
  return{
    data: state.data,
    bookshow: state.bookshow,
    token: state.user.token
  }
}

export default connect(select, Book)(BookPage)