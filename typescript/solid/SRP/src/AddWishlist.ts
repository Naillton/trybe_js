type Book = {
  book: string;
  author: string;
  genre: string;
}

class BookWishlist {
  private wishlist: Book[];

  constructor(book: Book) {
    this.wishlist = [];
    this.wishlist.push(book);
  }

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    return console.log(this.wishlist);
  }
}

const wishlist = new BookWishlist({
    book: 'The Road',
    author: 'Cormac McCarthy',
    genre: 'Dystopia' });
  wishlist.addToWishlist({
    book: 'Misery',
    author: 'Stephen King',
    genre: 'Thriller' });
  wishlist.showWishlist();
  
  export default BookWishlist;