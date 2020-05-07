import React,{Component} from 'react';
class DisplayShelf extends Component{
    render(){
    const {books,update}=this.props;
    return(
        <ol key={books.shelf} className="books-grid">
            {/*step#1: Display books in shelf*/}

            { /*Display books Only if the books length>0 */
            books.length>0 && (
                books.map(book =>(
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div 
                                    className="book-cover" 
                                    style={{ 
                                            width: 128, 
                                            height: 193,                                                 
                                        }}>
                                    { /*Using this condition to get rid of books whose image doesnot exist */
                                    book.imageLinks && (
                                        <img
                                            src={book.imageLinks.thumbnail}
                                            alt={book.title}
                                            />)}
                                </div>
                                <div className="book-shelf-changer">
                                    <select
                                            id={book.id}
                                            onChange={(event)=>update(book,event.target.value)}
                                            value={book.shelf ? book.shelf:"none"}
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
                    </li>)
                    ))
            }
            {/*Step#1: Ended */}
        </ol>
        );
    }
}

export default DisplayShelf

