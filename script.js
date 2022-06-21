let myLibrary = [];
let id = 0

function Book(title, author, pages, readed,id) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readed = readed
    this.id =id
}

function addBookToLibrary(title, author, pages, readed,id) {
    let book = new Book(title, author, pages, readed,id)
    return myLibrary.push(book)
}

function displayLibrary(element) {
    let container = document.querySelector(".container")

    let card = document.createElement("div")
    let title = document.createElement("div")
    let author = document.createElement("div")
    let pages = document.createElement("div")
    let readed = document.createElement("div")
    let deleteButton = document.createElement("button")
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    svg.setAttribute("data-attribute",id)
    svgPath.setAttribute("data-attribute", idIncrement())
    deleteButton.classList.add('delete-button')
    deleteButton.addEventListener("click", (e)=>{
        let found= findBook(Number(e.target.dataset.attribute))
        e.target.closest(".card").remove()
         return myLibrary.splice(found,1)
    })
    svg.setAttribute("style", "width:24px;height:24px")
    svg.setAttribute("viewBox", "0 0 24 24")
    svgPath.setAttribute("fill", "currentColor")
    svgPath.setAttribute("d", "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z")

    title.textContent = `title: ${element.title}`
    author.textContent = `author:${element.author}`
    pages.textContent = `pages: ${element.pages}`
    readed.textContent = `readed: ${element.readed}`


    card.classList.add("card")
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(readed)
    card.appendChild(deleteButton)
    deleteButton.appendChild(svg)
    svg.appendChild(svgPath)
    container.appendChild(card)

    // for (const element of myLibrary) {
    //     let book = document.createElement("div")
    //     let title = document.createElement("div")
    //     let author = document.createElement("div")
    //     let pages = document.createElement("div")
    //     let readed = document.createElement("div")
    //     title.textContent = element.title
    //     author.textContent = element.author
    //     pages.textContent = element.pages
    //     readed.textContent = element.readed

    //     book.classList.add("book")
    //     book.appendChild(title)
    //     book.appendChild(author)
    //     book.appendChild(pages)
    //     book.appendChild(readed)
    //     container.appendChild(book)
    // }
}

let openModal = document.querySelector(".btn-open-modal")
let modal = document.querySelector(".modal")
let addABook = document.querySelector(".btn-add-book")
let btnCancel = document.querySelector(".btn-cancel")
let title = document.querySelector("#title")
let author = document.querySelector("#author")
let pages = document.querySelector("#pages")
let readed = document.querySelector("#readed")


openModal.addEventListener("click", () => {
    modal.style.display = "flex"
})

addABook.addEventListener("click", () => {
    addBookToLibrary(title.value, author.value, pages.value, readed.checked,id)
    displayLibrary(myLibrary[myLibrary.length - 1])
    closeModal()
    resetInputsValues()
})

function resetInputsValues() {
    title.value = ""
    author.value = ""
    pages.value = ""
    readed.checked = false
}

function closeModal() {
    modal.style.display = "none"
}

btnCancel.addEventListener("click", () => {
    resetInputsValues()
    closeModal()
})

function idIncrement() {
    return id++
}


function removeBook(id){
    return myLibrary.splice(id["data-attribute"])
}
function findBook(numero){
    let foundBook = myLibrary.findIndex(e=>e.id === numero)
    return foundBook
}