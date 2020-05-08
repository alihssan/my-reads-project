import React,{Component} from 'react'
import DisplayShelf from './Display_shelf.js'
class SearchResults extends Component{
    
    render(){
        const {state,update,query}=this.props;
        {/*Step#1: Creating Empty Array to Store Results*/}
        {/*Checking the correct shelf of each book if wrong then correct it */}
        const check_shelf=(book)=>{
            state.books.map(
              book_=>{
                 if(book_.id===book.id){
                   if(book.shelf===undefined){
                       return(book.shelf=book_.shelf);
                   }
                 }
                 else{
                     return(book_);
                 }
              }
            )
           }
        let results_cache=[];
        let books=state.result;
        {/*Pushing results to empty array */}
        if(books.length>0 && query!==""){
            books.forEach(book => {
            results_cache.push(book)
        });
    }
    results_cache.map(book=>{
        return(check_shelf(book))
    })
        {/*Step#1: Ended */}
        return(
            <div>
                <DisplayShelf books={results_cache} update={update} />
            </div>

        );
    
    }
}

export default SearchResults