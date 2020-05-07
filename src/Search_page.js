import React,{Component} from 'react'
import SearchResults from './SearchResult.js'
import {Link} from 'react-router-dom'
class SearchPage extends Component{
  render(){
    let query=this.props.query
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search" onClick={this.props.clear}>
            close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={(event)=>(this.props.results(event.target.value))}/>
          </div>
        </div>
        <div className="search-books-results">
          <SearchResults state={this.props.state} update={this.props.update} query={query} />
        </div>
      </div>
    );
  }
}
export default SearchPage