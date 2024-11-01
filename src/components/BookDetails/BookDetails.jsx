import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredList, addToStoredList2 } from "../../utility/addToDB";

const BookDetails = () => {
    const {bookId} = useParams();

    const id = parseInt(bookId);

    const books = useLoaderData();
    console.log(books);

    const handleMarkAsRead = (id) => {
        addToStoredList(id);
    };

    const handleWishList = (id) => {
        addToStoredList2(id);
    };

    const book = books.find(book => book.bookId === id);
    // console.log(books, book, bookId, id);

    const {bookId: currentBookId, bookName, image} = book;

    return (
        <div className="my-10">
            <img className="w-40 rounded-xl" src={image} alt={bookName} />
            <br />
            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
            <button onClick={() => handleWishList(bookId)} className="btn btn-accent">Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;