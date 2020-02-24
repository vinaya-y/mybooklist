//Book class:Represents a book
class Book{
	constructor(title,author,isbn){
		this.title=title;
		this.author=author;
		this.isbn=isbn;
	}
}
//UI class:handle UI tasks
class UI{
	static displayBooks(){
		const StoredBooks = [
		{
			title:'Book One',
			author:'john Doe',
			isbn:'345242'
		},
		{
			title:'Book two',
			author:'goel Doe',
			isbn:'434356'
		}
		];
		const books = StoredBooks; 
		books.forEach((book) => UI.addBookToList(book));
	}
	static addBookToList(book){
		const list =document.querySelector('#book-list');
		const row = document.createElement('tr');
		row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
		`
		
	
	list.appendChild(row);
}
static deleteBook(el){
	if(el.classList.contains('delete')){
		el.parentElement.parentElement.remove();
	}
}
static showAlert(message,className){
	const div = document.createElement('div');
	div.className = `alert alert-${className}`;
	div.appendChild(document.createTextNode(message));
	const container = document.querySelector('.conatainer');
	const form = document.querySelector('#book-form');
	conatainer.insertBefore(div,form);

}
static clearfields(){
	document.querySelector('#title').value="";
	document.querySelector('#author').value="";
	document.querySelector('#isbn').value="";
}
}
// store Class:handle storage
//Event:Display Books
document.addEventListener('DOMContentLoaded',UI.displayBooks());
//Event:Add a Book
document.querySelector('#book-form').addEventListener('submit',e =>{
	// prevent default(e);
e.preventDefault();
	const title =document.querySelector('#title').value;
	const author =document.querySelector('#author').value;
	const isbn =document.querySelector('#isbn').value;
	//validate
	if(title === '' || author === ''|| isbn === ''){
		alert('please fill in all fields');
	}else{
		const book = new Book(title,author,isbn);
//add book to list
UI.addBookToList(book);
//clearfields
UI.clearfields();

	}
	});


//Event:Remove a Book
document.querySelector('#book-list').addEventListener('click',(e) =>{
	UI.deleteBook(e.target)
})