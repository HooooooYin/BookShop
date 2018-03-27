import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import '../index.css'
import { UploadBook } from '../store';
import {connect} from 'react-redux'

class SetImages extends React.Component{
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
      let upload = document.getElementById('uploads');
      let images = upload.files;
      this.props.uploadUrl(images);
    }
    render(){
      return(
        <div className="setimages" >
          <label htmlFor="uploads">上传文件</label>
          <input type="file" id = 'uploads' accept = "image/*" onChange = {this.handleChange} multiple = "multiple" />
        </div>
      );
    }
  }

  function select(state){
    return{
      url: state.upload_url
    }
  }

  export default connect(select, UploadBook)(SetImages)