//st5
const Store = require('../models/store.model')
module.exports = {
    //get all book
    getAllStores: (req, res) => {
        Store.find()
            .then((allStores) => {
                console.log(allStores)
                res.json(allStores)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    //Create a book
    createStore: (req, res) => {
        // console.log(req)
        Store.create(req.body)
            .then((newStore) => {
                console.log(newStore)
                res.json(newStore)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    //get one book by id
    getOneStore: (req, res) => {
        console.log(req.params)
        Store.findById(req.params.id)
            .then((oneStore) => {
                console.log(oneStore)
                res.json(oneStore)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    //update a book
    updateStore: (req, res) => {
        // console.log(req.params)
        // Book.findByIdAndUpdate(req.params.id)
        //     .then()
        //     .catch()
        //anotherway to use id
        const id = req.params.id;
        Store.findOneAndUpdate(
            { _id: id },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
            .then(updateStore => {
                console.log(res)
                res.json(updateStore)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })

    },
    //delete
    deleteStore: (req, res) => {
        const id = req.params.id;
        Store.deleteOne({ _id: id })
            .then(deletedStore => {
                console.log(deletedStore)
                res.json(deletedStore)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })

    }
}