import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import '../index.css'

export class SetImage extends React.Component{
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
  
    }
    handleChange(){
      let upload = document.getElementById('upload');
      let image = upload.files[0];
      let formdata = new FormData();
      let show = document.getElementById('imageshow');
      formdata.append('smfile', image);
      axios.post('https://sm.ms/api/upload', formdata).then((res) => {
        if(res.data.code === 'success'){
          this.props.onImageChange(res.data.data.url);
        }
        else{
          alert(res.data.msg);
        }
      })
  
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