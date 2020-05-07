import React,{Component} from 'react'
import DisplayShelf from './Display_shelf.js'
import { Link } from 'react-router-dom'

class Bookshelf extends Component {
    render(){
        const {books,update}=this.props;
        /*step#1:Moving books to there respective shelfs CurrentlyReading,WantToRead,Reading*/
        let wantread=books.filter(book=>book.shelf==='wantToRead');
        let currentlyreading=books.filter(book=>book.shelf==='currentlyReading');
        let read=books.filter(book=>book.shelf==='read');
        /*step#1 Ended */
        return(
            <div className="shelf">
                {/*step#2: Rendering Html to display Shelfs */}
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div> 
                <div className="currently_reading">
                    { /*It will display books only if the length of books in shelf >0 */
                    currentlyreading.length>0 &&(
                        <div className="list-books-content">
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <DisplayShelf books={currentlyreading} update={update}/>
                                </div>
                            </div>
                        </div>) }
                </div>
                <div className="want_to_read">
                    { /*It will display books only if the length of books in shelf >0 */
                    wantread.length>0 && (
                        <div className="list-books-content">
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want To Read</h2>
                            <div className="bookshelf-books">
                                <DisplayShelf books={wantread} update={update}/>
                            </div>
                        </div>
                        </div>) }
                </div>
                <div className="read">
                    {/*It will display books only if the length of books in shelf >0 */
                     read.length>0 && (
                        <div className="list-books-content">
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <DisplayShelf books={read} shelf="Read" update={update}/>
                            </div>
                        </div>
                        </div>
                    )}
                {/*Step#2: Ended */}
                </div>
                
                <div className="footer">
                    <p>Prepared By Ali Hassan @Udacity React Nanodegree</p>
                </div>
                {/*Step#3: Link to /search page */}
                <div className="serach_page">
                    <Link to="/search" className="open-search search-link">
                        <button>Add new books</button>
                    </Link>
                </div>
                {/*Step#3: Ended */}
            </div>
        );
}
}

export default Bookshelf
      