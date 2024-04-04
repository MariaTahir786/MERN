import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectManagerForm = () => {
    const [productM, setProductM] = useState({
        title: '',
        price: '',
        description: ''
    });
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', productM)
            .then(res => {
                console.log(res);
                setProductM({
                    title: '',
                    price: '',
                    description: ''
                });
                // Update the list of products after adding a new one
                setProducts([...products, res.data]);
            })
            .catch(err => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
            });
    };

    const changeHandler = e => {
        setProductM({ ...productM, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div className="container">
                <h1 className="text-center mb-4">Product Manager</h1>
                <form onSubmit={submitHandler} className="text-primary">
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" onChange={changeHandler} name="title" value={productM.title} className="form-control" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="number" onChange={changeHandler} name="price" value={productM.price} className="form-control" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" onChange={changeHandler} name="description" value={productM.description} className="form-control" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-3">
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <h2>All Products</h2>
                <div>
                    {products.map(product => (
                        <li key={product._id}>
                            <Link to={`/products/${product._id}`}>
                                {product.title}
                            </Link>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectManagerForm;
