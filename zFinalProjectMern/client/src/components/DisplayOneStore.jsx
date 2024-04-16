import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DisplayOneStore = () => {
    const [singleStore, setSingleStore] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                setSingleStore(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    const editHandler = () => {
        navigate(`/stores/edit/${id}`);
    };

    return (
        <div className='container'>
            <div className='row mt-5'>
                <h1>Store Added!</h1>
                <div className='col-md-8 offset-md-2'> {/* Adjusting column width */}
                    <div className='card' style={{ backgroundColor: '#faf4ff', height: '400px', border: '2px solid #391a4f', borderRadius: '5px', padding: '20px', marginTop: '20px' }}>
                        <div className='card-body d-flex flex-column justify-content-center align-items-center mt-3'> {/* Adjusting alignment */}
                            <h1 style={{ fontWeight: 'bold' }}>{singleStore.storeName}</h1> {/* Displaying store name as h1 with bold style */}
                            <p className='card-text'>Store Number: {singleStore.storeNumber}</p>
                            <p className='card-text'> {singleStore.open ? 'Open' : 'Closed'}</p>
                        </div>
                    </div>
                    <button onClick={editHandler} className='btn btn-outline-secondary mt-5 mb-0' style={{
                        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                        borderRight: '2px solid black',
                        borderBottom: '6px solid black',
                        borderRadius: '5px',
                        margin: '0 5px'
                    }}>Edit Store Details</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayOneStore;
