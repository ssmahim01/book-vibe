import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);

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

  return (
    <div>
      <h3 className="text-3xl my-8">Listed Books</h3>

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
