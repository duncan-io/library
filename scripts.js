
let cardArea = document.getElementById("cardArea");
let addBookBtn = document.getElementById("addBook");
let popUp = document.getElementById("popUp");
let addToLibrary = document.getElementById("addToLib")
let myLibrary = [];

addBookBtn.addEventListener("click", revealPopUp);
addToLibrary.addEventListener("click", newLibraryItem)

function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}
Book.prototype.info = function(){
    return title, author, pages, read
 }
Book.prototype.addBook = function () {
    myLibrary.push(this);
}



function displayBooks(){
    let whichOne = myLibrary.length - 1;
        let newCard = document.createElement("div");
        newCard.classList.add("card");
        let title = document.createElement("h3");
        let titleText = document.createTextNode(`Title: ${myLibrary[whichOne].title}`);
        title.appendChild(titleText);
        let author = document.createElement("h4");
        let authorText = document.createTextNode(`Author: ${myLibrary[whichOne].author}`);
        author.appendChild(authorText);
        let pages = document.createElement("p");
        let pagesText = document.createTextNode(`# of Pages: ${myLibrary[whichOne].pages}`);
        pages.appendChild(pagesText);
        let read = document.createElement("p");
        
        let readText = document.createTextNode(`Read?: ${myLibrary[whichOne].read}`);
        read.setAttribute("id", whichOne)
     
        let remove = document.createElement("button");
        let btnText = document.createTextNode(`REMOVE`);
        remove.classList.add("removeBtn");
        remove.appendChild(btnText);

        remove.addEventListener("click", function(){ 
            myLibrary.splice(whichOne, 1);
            this.parentElement.remove();
            });

        let readBtn = document.createElement("button");
        let readTxt;
        if(myLibrary[whichOne].read){
            readTxt = document.createTextNode("Read");
            readBtn.classList.add("readBtn");
        } else {
            readTxt = document.createTextNode("Not Read")
            readBtn.classList.add("otherReadBtn")
        }

        console.log(myLibrary[whichOne].read);
        
        readBtn.appendChild(readTxt)

        readBtn.addEventListener("click", function(){
            let parent = this;
            let child = this.firstChild;
            if(this.textContent == "Read"){
                let newTxt = document.createTextNode("Not Read");
                parent.removeChild(child);
                parent.appendChild(newTxt)
            } else {
                let newTxt = document.createTextNode("Read");
                parent.removeChild(child);
                parent.appendChild(newTxt);
            }
            this.classList.toggle("readBtn");
            this.classList.toggle("otherReadBtn")
        });

      

        read.appendChild(readText);
        newCard.appendChild(title);
        newCard.appendChild(author);
        newCard.appendChild(pages);
        newCard.appendChild(readBtn);
        newCard.appendChild(remove);
        cardArea.appendChild(newCard);

        
    };



function revealPopUp (){
    popUp.classList.toggle("hidden");
}

function newLibraryItem(){
    let newTitle = document.getElementById("title");
    let newAuthor = document.getElementById("author");
    let newPages = document.getElementById("pages");
    let getChoice = document.getElementById("yes");
    let newId = myLibrary.length - 1;


    myLibrary.push(new Book (newTitle.value, newAuthor.value, newPages.value, getChoice.checked, newId));
    displayBooks();

    newTitle.value="";
    newAuthor.value="";
    newPages.value="";
    getChoice.value="";
    getChoice.checked = false;
    no.checked = false;
    

    popUp.classList.toggle("hidden");
}