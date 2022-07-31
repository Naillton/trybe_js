import Books from "./database/models/BookModel";

(async () => {
  const books = await Books.findAll({ raw: true });
  console.log(books);
  process.exit(0);
})();