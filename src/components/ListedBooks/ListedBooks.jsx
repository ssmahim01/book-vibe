import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishlist } from "../../utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');

  const [wishLists, setWishLists] = useState([]);

  const books = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // console.log(books, storedReadList, storedReadListInt);

    const readBookLists = books.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookLists);
  }, []);

  useEffect(() => {
    const storedWishLists = getStoredWishlist();
    const storedWishListsInt = storedWishLists.map(id => parseInt(id));

    const allWishLists = books.filter(book => storedWishListsInt.includes(book.bookId));
    setWishLists(allWishLists);
  }, []);

  const handleSort = sortType => {
    setSort(sortType);

    if(sortType === 'Number of Pages'){
        const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
        const sortedWishLists = [...wishLists].sort((a, b) => a.totalPages - b.totalPages);

        setReadList(sortedReadList);
        setWishLists(sortedWishLists);
    }

    if(sortType === 'Ratings'){
        const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
        const sortedWishLists = [...wishLists].sort((a, b) => a.rating - b.rating);

        setReadList(sortedReadList);
        setWishLists(sortedWishLists);
    }

    if(sortType === 'Publisher Year'){
        const sortedReadList = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        const sortedWishLists = [...wishLists].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);

        setReadList(sortedReadList);
        setWishLists(sortedWishLists);
    }
  };

  return (
    <div>
      <h3 className="text-3xl my-8 text-center font-bold bg-slate-100 p-7 rounded-2xl">Listed Books</h3>

      <div className="dropdown flex justify-center items-center">
        <div tabIndex={0} role="button" className="btn m-1 bg-lime-500 text-white font-bold mb-12">
          {sort ? `Sort By: ${sort}` : 'Sort By'}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-48"
        >
          <li onClick={() => handleSort('Ratings')}>
            <a>Ratings</a>
          </li>
          <li>
            <a onClick={() => handleSort('Number of Pages')}>Number of Pages</a>
          </li>
          <li onClick={() => handleSort('Publisher Year')}>
            <a>Publisher Year</a>
          </li>
        </ul>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-3xl font-bold">
            Books I Read: {readList.length}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-5">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-3xl font-bold">My Wishlist: {wishLists.length}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 my-6">

            {
              wishLists.map(book => (
                <Book key={book.bookId} book={book}></Book>
              ))
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;