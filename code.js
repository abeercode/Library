let myLibrary = [];
const books = document.querySelector(".books");
const colors=["red.png", "yellow.png", "darkblue.png", "pink.png","green.png","lightblue.png"]


function Book(title, author, pages, read, id) {
    if (!new.target) {
        throw Error("error baby")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;

    this.info = function () {
        let stat = read ? "yes red" : "not read yet";
        return `${title}. by ${author}, ${pages} pages, ${stat}`;
    }
}

function addBookToLibrary(title, author, pages, read) {

    let id = crypto.randomUUID();
    const newBook = new Book(title, author, pages, read, id);
    myLibrary.push(newBook);

}

function displayBooks() {
    let z= 1;
    myLibrary.forEach(book => {
        let abook = document.createElement("div")
        abook.textContent = book.info();
        abook.classList.add("abook")
        let randomBg = colors[Math.floor(Math.random()*colors.length)];
        let strPath="./images/librarypng/"
        abook.style.backgroundImage= 'url("'+ strPath + randomBg + '")';
        abook.style.zIndex=z++;
        books.insertBefore(abook, books.firstChild)
        // books.appendChild(abook);
    });

}

addBookToLibrary("some", "me", 1, false)
addBookToLibrary("some", "me", 2, false)
addBookToLibrary("some", "me", 3, false)
addBookToLibrary("some", "me", 4, false)
addBookToLibrary("some", "me", 5, false)
// addBookToLibrary("some", "me", 5, false)
// addBookToLibrary("some", "me", 5, false)
console.log(myLibrary)
displayBooks();