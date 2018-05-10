import React from 'react'
import SetImages from '../components/SetImages'
import '../index.css'
import {connect} from 'react-redux'
import axios from 'axios'
import { UploadBook } from '../store'



class BookSale extends React.Component{
    constructor(props){
      super(props);
      this.onUpload = this.onUpload.bind(this);
    }
    onUpload(){
      let title = document.getElementById('book_title_sale').value;
      let name = document.getElementById('book_name_sale').value;
      let price = document.getElementById('book_price_sale').value;
      let description = document.getElementById('description_sale').value;
      axios.defaults.headers['Authorization'] = `token:${this.props.user.token}`;
      axios.post('/bookshop/books', {
        token: this.props.user.token,
        book_title: title,
        book_name: name,
        book_price: price,
        book_description: description,
        book_pic: this.props.url
      }).then((res) => {
        if(res.status === 200){
          this.props.updateToken(res.data.token)
          this.props.history.push(`/books/${res.data.book_id}`)
        }
        else{
          alert(res.data.message)
        }
      })
    }

    render(){
      return(
        <div className = "booksale" >
          <div className = "bookimage" >
            {this.props.url? this.props.url.map((url, index) => {
              return <img src = {url} key = {index} />  
            }) : null}
          </div>
          <SetImages />
          <div className = "saledetail" >
            <p>
              <label htmlFor="title">题目：</label>
              <input type="text" id = "book_title_sale" name="title" />
            </p>
            <p>
              <label htmlFor="name">书名：</label>
              <input type="text" id = "book_name_sale" name="name" />
            </p>
            <p>
              <label htmlFor="price">价格：</label>
              <input type="text" id = "book_price_sale" name="price" />
            </p>
            <p>
              <label htmlFor="description" >描述：</label>
              <textarea name="description" id = "description_sale" cols="50" rows="5"></textarea>
            </p>
            <p>
              <button onClick = {this.onUpload} >确认上传</button>
            </p>
          </div>
        </div>
      );
    }
  }

  function select(state){
    return{
      url: state.upload_url,
      user: state.user
    }
  }


  export default connect(select, UploadBook)(BookSale)