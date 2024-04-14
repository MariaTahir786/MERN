const StoreController = require('../controllers/store.controller')

module.exports = app => {
    //get all books
    app.get('/api/stores', StoreController.getAllStores)

    //create a book
    app.post('/api/stores', StoreController.createStore)
    //get one Book
    app.get('/api/stores/:id', StoreController.getOneStore)
    app.put('/api/stores/:id', StoreController.updateStore)
    app.delete('/api/stores/:id', StoreController.deleteStore)
}