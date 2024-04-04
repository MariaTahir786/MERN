import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DisplayOneProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => {
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={deleteProduct} className="btn btn-danger">Delete</button>
        </div>
    );
};

export default DisplayOneProduct;
