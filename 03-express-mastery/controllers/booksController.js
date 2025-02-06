let books = [{ id: 1, bookName: "start with why", author: "simon sinek" }];

// get request
const getBooks = (req, res) => {
  res.json(books);
};

// post request
const postBook = (req, res) => {
  const newObj = {
    id: books.length + 1,
    bookName: req.body.bookName,
    author: req.body.author,
  };

  books.push(newObj);
  res.status(201).json(newObj);
};

// put (updates the data)
// note: we use findIndex instead of map because findIndex stops after finding the item & does not loop through whole array
const updateBook = (req, res) => {
  const bookId = Number(req.params.id);
  const updatedBook = req.body;

  // find the index
  const indexOfBook = books.findIndex((book) => {
    return book.id === bookId;
  });

  // update that book in books array
  if (indexOfBook !== -1) {
    books[indexOfBook] = { ...books[indexOfBook], ...updatedBook };
    res.status(201).json(books);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
};

// delete
const delBook = (req, res) => {
  const bookId = Number(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex !== -1) {
    const deletedBook = books[bookIndex];
    books.splice(bookIndex, 1);
    res.status(201).send(deletedBook);
  } else {
    res.status(404).send("Book not found to delete");
  }
};

module.exports = { getBooks, postBook, updateBook, delBook };
