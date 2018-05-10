import React from 'react'
import ReactDOM from 'react-dom'
import { setImmediate, setInterval, clearInterval } from 'timers'
import '../index.css'
import { connect } from 'react-redux'
import { setShow } from '../store'
import {Link} from 'react-router-dom'


class ImageSlider extends React.Component{
    constructor(props){
      super(props);
      this.slideOver = this.slideOver.bind(this);
    }
  
    componentDidMount(){
      this.slide = setInterval(
        () => this.slideChange(),
        2000
      );
    }
  
    componentWillUnmount(){
      clearInterval(this.slide);
    }
  
  
    slideChange(){
      this.props.setShow((this.props.present + 1) % 6)
      this.props.setPresent((this.props.present + 1) % 6)
    }
  
    slideOver(e){
      this.props.setPresent(e.target.innerHTML - 1)
      this.props.setShow(e.target.innerHTML - 1)
    }
  
    render(){
      return(
        <div className="slider" >
          {(this.props.images || []).map((image, index) => {
            if(typeof(image) !== 'undefined') {
              return(
                <Link to = {`/books/${image.book_id}`} key = {image.book_id}   >
                  <img src={image.photo_url} className = {this.props.show[index]}/>
                </Link>
              );
            }
            else return null
          })}
          <div>
            <span className = {this.props.show[0]} onMouseOver ={this.slideOver}>1</span>
            <span className = {this.props.show[1]} onMouseOver ={this.slideOver}>2</span>
            <span className = {this.props.show[2]} onMouseOver ={this.slideOver}>3</span>
            <span className = {this.props.show[3]} onMouseOver ={this.slideOver}>4</span>
            <span className = {this.props.show[4]} onMouseOver ={this.slideOver}>5</span>
            <span className = {this.props.show[5]} onMouseOver ={this.slideOver}>6</span>
          </div>
        </div>
      );
    }
  }
  function select(state){
    return {
      show: state.show,
      present: state.present
    }
  }
  export default connect(select, setShow)(ImageSlider)