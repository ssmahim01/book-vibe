import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredList, addToStoredList2 } from "../../utility/addToDB";

const BookDetails = () => {
    const {bookId} = useParams();

    const id = parseInt(bookId);

    const books = useLoaderData();
    // console.log(books);

    const handleMarkAsRead = (id) => {
        addToStoredList(id);
    };

    const handleWishList = (id) => {
        addToStoredList2(id);
    };

    const book = books.find(book => book.bookId === id);
    // console.log(books, book, bookId, id);

    const {bookId: currentBookId, bookName, image, category, author, review, tags, totalPages, publisher, yearOfPublishing, rating} = book;

    return (
        <div className="my-10 flex lg:flex-row flex-col justify-between items-center lg:px-6 px-3 gap-10">
            <div className="lg:w-1/2 w-11/12 mx-auto">
            <img className="lg:w-[600px] w-full lg:h-[700px] md:h-[650px] h-full bg-slate-100 rounded-2xl p-16" src={image} alt={bookName} />
            </div>
          <div className="lg:w-1/2 w-11/12 mx-auto space-y-3">
            <h2 className="md:text-4xl text-2xl font-bold">{bookName}</h2>
            <p className="md:text-xl text-lg text-gray-700 font-medium border-b border-gray-200 pb-4">By: {author}</p>
            <p className="md:text-xl text-lg text-gray-700 font-medium border-b border-gray-200 pb-4">{category}</p>

            <p><span className="font-bold">Review: </span><span className="text-gray-500 font-medium">{review}</span></p>

            <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <p className="font-bold">Tag</p>
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-sm bg-lime-100 text-lime-500 font-bold rounded-full">
               # {tag}
              </button>
            ))}
          </div>

          <div className="space-y-3 py-2">
            <p><span className="text-gray-400 font-medium">Number of Pages:</span><span className="font-bold ml-2"> {totalPages}</span></p>
            <p><span className="text-gray-400 font-medium">Publisher:</span><span className="font-bold ml-2"> {publisher}</span></p>
            <p><span className="text-gray-400 font-medium">Year of Publishing:</span><span className="font-bold ml-2"> {yearOfPublishing}</span></p>
            <p><span className="text-gray-400 font-medium">Rating:</span><span className="font-bold ml-2"> {rating}</span></p>     
          </div>

            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
            <button onClick={() => handleWishList(bookId)} className="btn btn-accent">Add to Wishlist</button>
          </div>
        </div>
    );
};

export default BookDetails;