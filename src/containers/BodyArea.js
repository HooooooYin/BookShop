import React from 'react'
import ReactDOM from 'react-dom'
import ImageSlider from '../components/ImageSlider'
import BookShow from '../components/BookShow'
import {GoodUser} from '../components/GoodUser'
import '../index.css'

export class BodyArea extends React.Component{
    render(){
      return(
        <div className="bodyarea" >
          <div>
            <ImageSlider images = {this.props.images} />
            <BookShow images = {this.props.showimages} />
          </div>
          <GoodUser title = '优秀卖家' users = {this.props.best_sellers}/>
        </div>
      );
    }
  }