import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import { connect } from 'react-redux'
import { setBook } from '../store'
import { Link } from 'react-router-dom'
class BookShow extends React.Component{
    constructor(props){
      super(props);
      this.showOver = this.showOver.bind(this);
    }
  
    showOver(e){
      this.props.setNow(e.target.value)
      this.props.setOn(e.target.value)
    }
    render(){
      return(
        <div className="bookShow" >
          <ul>
            <b>为您推荐</b>
            <span>
              <li className={this.props.bookon[0]} value="0" key="0" onMouseOver={this.showOver} >最新上架</li>
              <li className={this.props.bookon[1]} value="1" key="1" onMouseOver={this.showOver} >热搜书籍</li>
              <li className={this.props.bookon[2]} value="2" key="2" onMouseOver={this.showOver} >随便看看</li>
            </span>
          </ul>
            <div className={`bookarea ${this.props.bookon[0]}`} >
              {(this.props.images[0] || []).map((image) => {
                  if(typeof(image) !== 'undefined'){
                    return <Link to = {`/books/${image.book_id}`} key={image.book_id} >
                              <img src={image.photo_url}/>
                              <p>{image.book_title}</p>
                            </Link>
                  }
                  else return null
                }
              )}
            </div>
            <div className={`bookarea ${this.props.bookon[1]}`} >
            {(this.props.images[1] || []).map((image) => {
                  if(typeof(image) !== 'undefined'){
                    return <Link to = {`/books/${image.book_id}`} key={image.book_id} >
                              <img src={image.photo_url}/>
                              <p>{image.book_title}</p>
                            </Link>
                  }
                  else return null
                }
            )}
            </div>
            <div className={`bookarea ${this.props.bookon[2]}`} >
            {(this.props.images[2] || []).map((image) => {
                  if(typeof(image) !== 'undefined'){
                    return <Link to = {`/books/${image.book_id}`} key={image.book_id} >
                              <img src={image.photo_url}/>
                              <p>{image.book_title}</p>
                            </Link>
                  }
                  else return null
                }
            )}
            </div>
        </div>
      );
    }
  }

  function select(state){
    return{
      bookon: state.bookon,
      booknow: state.booknow
    }
  }

export default connect(select, setBook)(BookShow)