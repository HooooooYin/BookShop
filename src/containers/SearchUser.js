import React from 'react'
import '../index.css'
import {UserItem} from '../components/UserItem'
import {connect} from 'react-redux'
import { Search } from '../store';
class SearchUser extends React.Component{
    componentWillMount(){
        this.props.searchRequest(this.props.search_url, this.props.search_params);
    }
    
  render(){
    if((typeof(this.props.data.result) !== 'undefined') && (typeof(this.props.data.result.user) !== 'undefined')){
      return(
        <div>
          <img src={require('../images/searchuser.png')}   className = "searchtitle" />
          <div className="searchpage" >
            <UserItem results = {this.props.data.result.user} />
          </div>
        </div>
        
      );
    }
    else{
      return null;
    }
  }
}

function select(state){
  return{
    search_url: state.search_url,
    search_params: state.search_params,
    data: state.data
  }
}

export default connect(select, Search)(SearchUser)