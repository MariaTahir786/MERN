import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateStore = () => {
    const { id } = useParams();

    const [store, setStore] = useState({
        storeName: '',
        storeNumber: '',
        open: false // Initial state for checkbox should be a boolean
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                console.log(res.data);
                setStore(res.data); // Corrected to setStore
            })
            .catch(err => console.log(err));
    }, [id]); // Added id as dependency to useEffect

    const changeHandler = e => {
        const { name, value, type, checked } = e.target;

        // For checkboxes, use the checked property instead of value
        const newValue = type === 'checkbox' ? checked : value;

        setStore({ ...store, [name]: newValue });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/stores/${id}`, store)
            .then(res => {
                if (res.data.errors) {
                    console.log(res.data.errors);
                    setErrors(res.data.errors);
                } else {
                    navigate(`/stores/${res.data._id}`);
                }
            })
            .catch(err => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div >
            <h4>Edit this store!</h4>
            <div className="form-container" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                <form onSubmit={submitHandler}>

                    <div className='mb-3'>
                        <label htmlFor="storeName" className='form-label'>Store Name</label>
                        <input type="text" onChange={changeHandler} name='storeName' value={store.storeName} className='form-control' />
                        {errors.storeName ? <p className='text-danger'>{errors.storeName.message}</p> : null}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="storeNumber" className='form-label'>Store Number </label>
                        <input type="number" onChange={changeHandler} name='storeNumber' value={store.storeNumber} className='form-control' />
                        {errors.storeNumber ? <p className='text-danger'>{errors.storeNumber.message}</p> : null}
                    </div>
                    <div className='mb-3'>
                        <input type="checkbox" onChange={changeHandler} name='open' checked={store.open} className='form-check-input' />
                        <label htmlFor="open" className='form-label'> Open? </label>


                    </div>
                    <div>
                        <div className="mb-3 d-flex justify-content-end"></div>
                    </div>
                    <button type="submit" className='btn btn-outline-secondary' style={{
                        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                        borderRight: '2px solid black',
                        borderBottom: '6px solid black',
                        borderRadius: '5px',
                        margin: '0 5px'
                    }}>Edit Store</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateStore;
