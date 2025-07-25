function Book(title , author , pages , read){
    if(!new.target){
        throw Error("error baby")
    }
    this.title=title;
    this.author=author;
    this.pages= pages;
    this.read=read;

    this.info= function(){
        let stat= read ?  "yes red":"not read yet" ;
        return `${title}. by ${author}, ${pages} pages, ${stat}`;
    }
}

const bookone= new Book("some", "me", 3232, false)
console.log(bookone.info())