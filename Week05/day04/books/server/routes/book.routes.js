const BookController=require('../controllers/book.controller')

module.exports=app=>{
    //get all books
    app.get('/api/books',BookController.getAllBooks)

    //create a book
    app.post('/api/books',BookController.createBook)
    //get one Book
    app.get('/api/books/:id',BookController.getOneBook)
}