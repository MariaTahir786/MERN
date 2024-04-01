const { on } = require('events')
const Product=require('../models/product.model')
module.exports={
    getAllProducts:(req,res)=>{
        Product.find()
        .then((allProducts)=>{
            console.log(allProducts)
            res.json(allProducts)
        })
        .catch((err)=>{
res.status(400).json(err)
        })
    },

    //create a Product

    createProduct:(req,res)=>{
        Product.create(req.body)
        .then((newProduct)=>{
            console.log(newProduct)
            res.json(newProduct)
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },
    //getOneProduct
 getOneProduct:(req,res)=>{
    console.log(req.params)

Product.findById(req.params.id)
.then((oneProduct=>{
    console.log(oneProduct)
    res.json(oneProduct)
}))
.catch((err)=>{
    console.log(err)
    res.status(400).json(err)
})
 },

updateProduct:(req,res)=>{
    console.log(req.params)
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then((updateBook)=>{
        console.log(updateBook)
        res.json(updateBook)
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).json(err)
    })
},
//delete product

deleteProduct:(req,res)=>{
    console.log(req.params)
    Product.findByIdAndDelete(req.params.id)
    .then((deletedBook)=>{
        console.log(deletedBook)
        res.json(deletedBook)
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).json(err)
    })
}




}