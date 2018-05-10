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
    if((typeof(this.props.data) !== 'undefined') && (typeof(this.props.data.result) !== 'undefined')){
      return(
        <div>
          <img src={require('../images/searchuser.png')}   className = "searchtitle" />
          <div className="searchpage" >
          {this.props.data.result.length === 0?
              <div className = "not_found" >
                <img src={require('../images/notfound.png')} alt=""/>
                <p>查不到相关信息</p>
              </div> : <UserItem results = {this.props.data.result} />
          }
          </div>
        </div>
        
      );
    }
    else{
      return <div className = "loading" >
          <img src={require('../images/loading.png')}/>
        </div>
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