import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const {bookId} = useParams();

    const id = parseInt(bookId);

    const books = useLoaderData();
    console.log(books);

    const book = books.find(book => book.bookId === id);
    // console.log(books, book, bookId, id);

    const {bookId: currentBookId, bookName, image} = book;

    return (
        <div className="my-10">
            <img className="w-40 rounded-xl" src={image} alt={bookName} />
            <br />
            <button className="btn btn-outline mr-4 btn-accent">Read</button>
            <button className="btn btn-accent">Wishlist</button>
        </div>
    );
};

export default BookDetails;