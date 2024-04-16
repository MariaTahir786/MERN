import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StoreForm = () => {
    const [store, setStore] = useState({
        storeName: '',
        storeNumber: '',
        open: false
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const changeHandler = e => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        let inputType;
        if (name === 'storeName') {
            inputType = value.replace(/[^A-Za-z0-9\s]/g, '');
        } else {
            inputType = newValue;
        }
        setStore({ ...store, [name]: inputType });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/stores', store)
            .then(res => {
                console.log(res);
                setStore({
                    storeName: '',
                    storeNumber: '',
                    open: false
                });
                navigate(`/stores/${res.data._id}`);
            })
            .catch(err => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div className="container">
            <h1>Add a new Store!</h1>
            <div className="row justify-content-center"> {/* Center the card */}
                <div className="col-md-6 mt-4"> {/* Set the card width to 75% of page */}
                    <div className="card" style={{ backgroundColor: '#faf4ff', border: '2px solid #391a4f', borderRadius: '5px', padding: '20px', marginTop: '20px' }}>
                        <form onSubmit={submitHandler}>
                            <div className='mb-3'>
                                <label htmlFor="storeName" className='form-label'>Store Name</label>
                                {errors.storeName ? <p className='text-danger'>{errors.storeName.message}</p> : null}
                                <input type="text" onChange={changeHandler} name='storeName' value={store.storeName} className='form-control' />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="storeNumber" className='form-label'>Store Number</label>
                                {errors.storeNumber ? <p className='text-danger'>{errors.storeNumber.message}</p> : null}
                                <input type="text" onChange={changeHandler} name='storeNumber' value={store.storeNumber} className='form-control' />
                            </div>
                            <div className='mb-3'>
                                <input type="checkbox" onChange={changeHandler} name='open' checked={store.open} className='form-check-input' />
                                <label htmlFor="open" className='form-label'> Open?</label>
                            </div>

                            <div className="mb-3 d-flex justify-content-end"></div>

                            <button type="submit" className='btn btn-outline-secondary' style={{
                                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                                borderRight: '2px solid black',
                                borderBottom: '6px solid black',
                                borderRadius: '5px',
                                margin: '0 5px'
                            }}>Add a new Store</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreForm;
