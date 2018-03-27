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
    if((typeof(this.props.data.result) !== 'undefined') && (typeof(this.props.data.result.search_book) !== 'undefined')){
      return(
        <div>
          <img src={require('../images/searchbook.png')} className = "searchtitle" />
          <div className="searchpage" >
            <BookList results = {this.props.data.result.search_book} />
            <HotList title = '为您推荐' images = {this.props.data.result.recommend_book} />
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

export default connect(select, Search)(SearchPage)