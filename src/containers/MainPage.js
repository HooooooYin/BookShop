import React from 'react'
import MenuBar from './MenuBar'
import {BodyArea} from './BodyArea'
import {FootBar} from '../components/FootBar'
import {SET_LOGIN, SET_REGISTER, set_login, set_register} from '../actions'
import '../index.css'
import { connect } from 'react-redux'
import {mapDispatchToProps} from '../store'
import '../mock'



class MainPage extends React.Component{

    componentWillMount(){
      this.props.indexRequest();
    }

    render(){
      if( (JSON.stringify(this.props.data.data) !== '{}') && (typeof(this.props.data.data) !== 'undefined')) {
        return(
          <div>
            <BodyArea sorts = {[`分类1`, `分类2`, `分类3`, `分类4`, `分类5`, `分类6`]} 
           images = {this.props.data.data.display_photo}
           showimages = {
             [this.props.data.data.latest_book, 
             this.props.data.data.hotest_book,
             this.props.data.data.recommend_book,
             this.props.data.data.frag_book
             ]}
             best_sellers = {this.props.data.data.best_sellers} />
          </div>
          
        );
      }
      else {
        return null;
      }
    }
  }

  function select(state){
    return{
      data: state.data
    }
  }
  export default connect(select, mapDispatchToProps)(MainPage)