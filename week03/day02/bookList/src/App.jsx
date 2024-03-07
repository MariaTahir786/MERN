import BookForm from './components/BookForm'
import './App.css'
import Display from './components/Display'
import { useState } from 'react'
function App() {
  
const[bookList,setBookList]=useState([]);
//adding new book
const newBook=(newBook)=>{
//   setBookList([...bookList,newBook])
// } or we can create function like below
//function for creating the book
setBookList((prevBook)=>(
  [...prevBook, newBook]
))
}

//function to complete or incomplete
const completeBook=(submittedBook)=>{

let updatedBook=bookList.map((book,idx)=>{
if(book===submittedBook){
 //make copy of current book every book is an objrct in booklist so we have to make copy of each book on each iteration then return the book which will return to updated book

 let newBook= {...book}
newBook.isComplete=!newBook.isComplete
return newBook

}else {
  return book
}
})
//and we set the updated book here coming from above if statement
setBookList(updatedBook)
}

// functi to delete buttom to work and delete each corresponding book
const deleteBook= (book_id)=>{
  const filteredBook= bookList.filter((book)=>{
    //here book.id is current book and
return book.id!==book_id

  })
setBookList(filteredBook)
}

  return (
    <>
    {/* //this is a function which we declared above and pass it to function on bookForm as a prop   */}
      <BookForm newBook={newBook}/>
      <Display bookList={bookList} completeBook={completeBook} deleteBook={deleteBook}/>
    </>
  )
}

export default App
