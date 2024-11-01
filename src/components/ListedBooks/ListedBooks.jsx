import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');

  const books = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(books, storedReadList, storedReadListInt);

    const readBookLists = books.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookLists);
  }, []);

  const handleSort = sortType => {
    setSort(sortType);

    if(sortType === 'Number of Pages'){
        const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
        setReadList(sortedReadList);
    }

    if(sortType === 'Ratings'){
        const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
        setReadList(sortedReadList);
    }

    if(sortType === 'Publisher Year'){
        const sortedReadList = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        setReadList(sortedReadList);
    }
  };

  return (
    <div>
      <h3 className="text-3xl my-8">Listed Books</h3>

      <div className="dropdown flex justify-center items-center">
        <div tabIndex={0} role="button" className="btn m-1">
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
          <h2 className="text-3xl font-bold">My Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
