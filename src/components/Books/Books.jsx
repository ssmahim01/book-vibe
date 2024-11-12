import { useContext, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
        .then(response => response.json())
        .then(data => setBooks(data))
    },[]);

    return (
        <div>
            <h2 className="text-4xl text-center font-bold">Books</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
           </div>
        </div>
    );
};

export default Books;