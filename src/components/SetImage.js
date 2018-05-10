import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import '../index.css'
import { uploadImage } from '../store';
import {connect} from 'react-redux'

class SetImage extends React.Component{
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
      let upload = document.getElementById('upload');
      let image = upload.files[0];
      this.props.uploadIcon(image, this.props.token)
  
    }
    render(){
      return(
        <div className = "setimage" >
          <img src={this.props.url} alt=""/>
          <label htmlFor="upload">上传文件</label>
          <input type="file" id = 'upload' accept = "image/*" onChange = {this.handleChange} />
        </div>
      );
    }
  }
  function select(state){
    return{
      upload_url: state.upload_url,
      token: state.user.token
    }
  }

  export default connect(select, uploadImage)(SetImage)
