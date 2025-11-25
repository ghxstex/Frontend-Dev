class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) this.isIssued = true;
    }

    returnBook() {
        if (this.isIssued) this.isIssued = false;
    }
}

let books = [
    new Book("JS Basics", "Author A", "B001"),
    new Book("HTML Guide", "Author B", "B002"),
    new Book("CSS Book", "Author C", "B003"),
    new Book("DSA", "Author D", "B004"),
    new Book("Algorithms", "Author E", "B005")
];

books[1].issueBook();

console.log("Available Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b.title));

function issueByISBN(code) {
    const book = books.find(b => b.isbn === code);
    if (book) book.issueBook();
}

issueByISBN("B004");
issueByISBN("X000");
