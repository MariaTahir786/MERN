import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const DisplayAllStores = () => {
    const [stores, setStores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores')
            .then(res => {
                setStores(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const deleteStore = (id) => {
        axios.delete(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                setStores(stores.filter(store => store._id !== id));
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleNotFoundStore = () => {

        navigate('/stores/create');
    };

    return (
        <div>
            <h1>Find stores in your area!</h1>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>Store </th>
                        <th>Store Number</th>
                        <th>Open</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {stores.map((store, idx) => (
                        <tr key={store._id}>
                            <td><Link to={`/stores/${store._id}`}>{store.storeName}</Link></td>
                            <td>{store.storeNumber}</td>
                            <td>{store.open ? 'True' : 'False'}</td>
                            <td>
                                <button className="btn btn-outline-secondary" onClick={() => deleteStore(store._id)} style={{
                                    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                                    borderRight: '2px solid black',
                                    borderBottom: '6px solid black',
                                    borderRadius: '5px',
                                    margin: '0 5px'
                                }}>Delete</button>
                            </td>

                        </tr>
                    ))}

                </tbody>
            </table>
            <button className='btn btn-outline-secondary mt-2 mb-0' style={{
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                borderRight: '2px solid black',
                borderBottom: '6px solid black',
                borderRadius: '5px',
                margin: '0 5px'
            }} onClick={handleNotFoundStore}>Can't find your store?</button>
        </div>
    );
};

export default DisplayAllStores;
