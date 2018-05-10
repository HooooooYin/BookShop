import React from 'react'
import '../index.css'
import {BookList} from '../components/BookList'
import {HotList} from '../components/HotList'
import {connect} from 'react-redux'
import { Search } from '../store';
class SearchPage extends React.Component{
  componentWillMount(){
    this.props.searchRequest(this.props.search_url, this.props.search_params);
  }

  render(){
    if((typeof(this.props.data) !== 'undefined') && (typeof(this.props.data.result) !== 'undefined') && (typeof(this.props.data.recommend_book) !== 'undefined')){
      return(
        <div>
          <img src={require('../images/searchbook.png')} className = "searchtitle" />
          <div className="searchpage" >
            {this.props.data.result.length === 0?
              <div className = "not_found" >
                <img src={require('../images/notfound.png')} alt=""/>
                <p>查不到相关信息</p>
              </div> : <BookList results = {this.props.data.result} />
            }
            {this.props.token === ""? null : <HotList title = '为您推荐' images = {this.props.data.recommend_book} />}
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
    data: state.data,
    token: state.user.token
  }
}

export default connect(select, Search)(SearchPage)