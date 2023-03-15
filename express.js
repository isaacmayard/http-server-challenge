import express from "express";
const app = express();
const port = 8080;

app.use(express.json());
// app.use(cors());

let booksArr = [
  {
    id: 0,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    Excellent: false,
  },
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    Excellent: true,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    Excellent: true,
  },
];

// const bookToAdd = {
//     id: 3,
//     title: "Harry Potter",
//     author: "JK Rowling",
//     year: 2005
// }

app.get("/api/books", (req, res) => {
  let { Excellent } = req.query;
  if (Excellent !== undefined) {
    console.log("These books are excellent!");
    Excellent = Excellent === "true";
    let myBooks = booksArr.filter((element) => element.Excellent === Excellent);
    console.log(myBooks);
    res.status(200).send(myBooks);
  } else {
    console.log("Invalid!");
    res.status(200).send(booksArr);
  }
});

app.get("/api/books/:id", (req, res) => {
  let { id } = req.params;
  let myBook = booksArr.find((element) => {
    return element.id === parseInt(id);
  });
  console.log(myBook);
  res.status(201).send(myBook);
});

app.post("/api/books", (req, res) => {
  let bookToAdd = req.body;
  booksArr.push(bookToAdd);
  res.send(booksArr);
});

app.delete("/api/books/:id", (req, res) => {
  var { id } = req.params;
  var updatedBooks = booksArr.filter((book) => book.id != id);
  booksArr = updatedBooks;
  res.send("Resource has been deleted.");
});

app.put("/api/books/:id", (req, res) => {
  var { id } = req.params;
  booksArr.forEach((book, index) => {
    if (book.id == id)
      booksArr[index] = {
        id: id,
        title: "The Way of Kings",
        author: "Brandon Sanderson",
        year: 2010,
      };
  });
  res.send(booksArr);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
