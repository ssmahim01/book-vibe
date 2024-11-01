import { key } from "localforage";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, category, rating, totalPages, yearOfPublishing } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-slate-100 py-8 rounded-2xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center items-center gap-4">
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-xs bg-lime-100 text-lime-500 font-bold">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title text-xl font-bold">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-lg text-gray-700 font-medium">By: {author}</p>

          <div className="flex justify-between items-center">
            <p className="text-lg text-gray-600 font-medium">Pages: {totalPages}</p>
            <p className="text-lg text-gray-600 font-medium">Publish: {yearOfPublishing}</p>
            </div>

          <div className="border-t-2 border-dashed border-gray-200 my-3"></div>

          <div className="card-actions justify-between">
            <div className="badge-outline text-gray-800 text-xl font-semibold">{category}</div>

            <div className="rating">
            <p className="text-lg text-gray-600 font-medium mr-2">{rating}</p>
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-100"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
