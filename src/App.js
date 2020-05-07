import React,{Component} from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Bookshelf from './bookshelf.js';
import SearchPage from './Search_page.js';
import {Route} from 'react-router-dom';
class BooksApp extends Component {
  state = {
    books:[],
    result:[],
    query:''
  }
  componentDidMount() {
    /*Using .getAll() from BookAPI to get all the books it will return a promise so using .then method to retrieve 
      data */
    BooksAPI.getAll().then(
     book=>{
       /*changing state of empty books array , populating it with the data received. */
       this.setState({books:book});
      }
    );
  }
  update_shelf=(book,shelf)=>{
    /*This function will invoke when we have to move a book from one shelf to other to update previous shelf. */
    BooksAPI.update(book,shelf).then(
      ()=>(this.setState((prevstate)=>({books: 
          prevstate.books.filter(b =>{
            if (b.id===book.id){ 
                return(book.shelf=shelf);
             }
            else{
                return(book);
            }
          })
        })
      )
    ));
  }
  update_search=(book,shelf)=>{
    /*This function is used for search_results, when user added a book from search_results to a shelf 
      this function will first add that book to state.books then run the update_shelf function */
    /*updating the state of result will remove the selected from search_results so it wont appear. */
    this.setState(prev=>({
     books: prev.books.concat(book),
     result:prev.result.filter(
       newbook=> newbook.id!==book.id
     )
    }));
    return(this.update_shelf(book,shelf));
  }
  searchresults= query => {
    /*It will update the query to current user input value */
      this.setState({query:query});
      /*It will invoke .search function from BooksAPI to get all search results  */
      if (query.length>0){ 
          BooksAPI.search(query).then( books=>{
                this.setState({
                  result:books
                });
              });
        }
    
  }
  Clear=()=>{
    /*This function is used to clear query and search results */
    this.setState({
      result:[],
      query:''
    });
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/'>
            <Bookshelf books={this.state.books} update={this.update_shelf}/>
        </Route>
        <Route exact path='/search'>
            <SearchPage state={this.state} results={this.searchresults} update={this.update_search} clear={this.Clear} query={this.state.query} />
        </Route>
      </div>
    );
  }
}
export default BooksApp
