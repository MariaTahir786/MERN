//st5
const Book = require('../models/book.model')
module.exports = {
    //get all book
    getAllBooks: (req, res) => {
        Book.find()
            .then((allBooks) => {
                console.log(allBooks)
                res.json(allBooks)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    //Create a book
    createBook: (req, res) => {
        // console.log(req)
        Book.create(req.body)
            .then((newBook) => {
                console.log(newBook)
                res.json(newBook)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    //get one book by id
    getOneBook: (req, res) => {
        console.log(req.params)
        Book.findById(req.params.id)
            .then((oneBook) => {
                console.log(oneBook)
                res.json(oneBook)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    //update a book
    updateBook: (req, res) => {
        // console.log(req.params)
        // Book.findByIdAndUpdate(req.params.id)
        //     .then()
        //     .catch()
        //anotherway to use id
        const id=req.params.id;
        Book.findOneAndUpdate(
            { _id:id},
            req.body,
           {
            new:true,
            runValidators:true}
        )
        .then(updateBook=>{
            console.log(res)
            res.json(updateBook)
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })

    },
    //delete
    deleteBook: (req, res) => {
        const id=req.params.id;
        Book.deleteOne({_id:id})
            .then(deletedBook => {
                console.log(deletedBook)
                res.json(deletedBook)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })

        }
}