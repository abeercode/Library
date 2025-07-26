let myLibrary =[];

function Book(title , author , pages , read, id){
    if(!new.target){
        throw Error("error baby")
    }
    this.title=title;
    this.author=author;
    this.pages= pages;
    this.read=read;
    this.id= id;

    // this.info= function(){
    //     let stat= read ?  "yes red":"not read yet" ;
    //     return `${title}. by ${author}, ${pages} pages, ${stat}`;
    // }
}

function addBookToLibrary(title, author, pages , read) {

    let id= crypto.randomUUID();
    const newBook= new Book(title, author, pages , read , id);
    myLibrary.push(newBook);

}

// const bookone= new Book("some", "me", 3232, false)
// console.log(bookone.info())
addBookToLibrary("some", "me", 3232, false)
console.log(myLibrary)