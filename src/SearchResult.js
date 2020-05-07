import React,{Component} from 'react'
class SearchResults extends Component{
    render(){
        const {state,update,query}=this.props;
        {/*Step#1: Creating Empty Array to Store Results*/}

        let results_cache=[];
        let books=state.result;
        {/*Pushing results to empty array */}
        if(books.length>0 && query!==""){
            books.forEach(book => {
            results_cache.push(book)
        });
    }
        {/*Step#1: Ended */}
        return(
            <ol key={books.shelf} className="books-grid">
            {/*Step#2: Displaying Search Results */}
            {/*Showing only if the length>0 */
            results_cache.length>0 &&(
                results_cache.map(book=>(
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div 
                                className="book-cover" 
                                style={{ 
                                    width: 128, 
                                    height: 193,                                                 
                                    }}>
                                    {
                                        book.imageLinks && (
                                            <img
                                                src={book.imageLinks.thumbnail}
                                                alt={book.title
                                                }
                                            />
                                            )
                                        }
                                </div>
                               <div className="book-shelf-changer">
                                    <select
                                    id={book.id}
                                    value={book.shelf ? book.shelf:"none"}
                                    onChange={(event)=>update(book,event.target.value)}
                                    >
                                        <option name="none" value="none">Delete</option>
                                        <option name="wanttoread" value="wantToRead">Want to Read</option>
                                        <option name="Currentlyreading" value="currentlyReading">Currently Reading</option>
                                        <option name="read" value="read">Read</option>
                                    </select>
                               </div>
                           </div>
                           <div className="book-title">{book.title}</div>
                           <div className="book-authors">{book.authors}</div>
                           </div>
                       </li>
                       )))
                    }
                {/*Step#2: Ended */}
            </ol>
            

        );
    
    }
}

export default SearchResults