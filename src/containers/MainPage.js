import React from 'react'
import MenuBar from './MenuBar'
import {BodyArea} from './BodyArea'
import {FootBar} from '../components/FootBar'
import {SET_LOGIN, SET_REGISTER, set_login, set_register} from '../actions'
import '../index.css'
import { connect } from 'react-redux'
import {mapDispatchToProps} from '../store'



class MainPage extends React.Component{

    componentWillMount(){
        this.props.indexRequest(this.props.token)
    
    }

    render(){
      if( (JSON.stringify(this.props.data.data) !== '{}') && (typeof(this.props.data.data) !== 'undefined')) {
        return(
          <div>
            <BodyArea 
           images = {this.props.data.data.display_photos}
           showimages = {
             [this.props.data.data.latest_books, 
             this.props.data.data.hotest_books,
             this.props.data.data.frag_books
             ]}
             best_sellers = {this.props.data.data.best_sellers} />
          </div>
          
        );
      }
      else {
        return <div className = "loading" >
          <img src={require('../images/loading.png')}/>
        </div>
      }
    }
  }

  function select(state){
    return{
      data: state.data,
      token: state.user.token
    }
  }
  export default connect(select, mapDispatchToProps)(MainPage)