import React from 'react'
import {StarScore} from '../store'
import {connect} from 'react-redux'
import '../index.css'


class Star extends React.Component{
  constructor(props){
    super(props);
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick(event){
    let e = event || window.event;
    let star = document.getElementById(this.props.index);
    let offset = e.clientX - 138 - star.offsetLeft;
    let temp = 5 - parseInt(offset / 15 + 1);
    star.style.cssText = `background-position: 0 ${temp * -30}px`;
    this.props.setScore( 5 - temp);
  }

  render(){
    return(
      <div className = "out"  >
        <div className = "star" id = {this.props.index} onClick = {this.handleclick}></div>
      </div>
    );
  }
}

function select(state){
    return{
        score: state.score
    }
}

export default connect(select, StarScore)(Star)