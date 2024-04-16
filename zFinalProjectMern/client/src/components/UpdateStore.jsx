import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateStore = () => {
    const { id } = useParams();
    const [store, setStore] = useState({
        storeName: '',
        storeNumber: '',
        open: false
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                console.log(res.data);
                setStore(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const changeHandler = e => {
        const { name, value, type, checked } = e.target;
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
        <div className="container">

            <div className="row justify-content-center mt-4">
                <h1>Edit this store!</h1>
                <div className="form-container col-md-8" style={{ backgroundColor: '#faf4ff', border: '2px solid #391a4f', borderRadius: '5px', padding: '50px' }}>

                    <form onSubmit={submitHandler}>
                        <div className='mb-3'>
                            <label htmlFor="storeName" className='form-label'>Store Name</label>
                            {errors.storeName ? <p className='text-danger'>{errors.storeName.message}</p> : null}
                            <input type="text" onChange={changeHandler} name='storeName' value={store.storeName} className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="storeNumber" className='form-label'>Store Number </label>
                            {errors.storeNumber ? <p className='text-danger'>{errors.storeNumber.message}</p> : null}
                            <input type="number" onChange={changeHandler} name='storeNumber' value={store.storeNumber} className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <input type="checkbox" onChange={changeHandler} name='open' checked={store.open} className='form-check-input' />
                            <label htmlFor="open" className='form-label'> Open? </label>
                        </div>
                        <div className="mb-3 d-flex justify-content-end"></div>
                        <button type="submit" className='btn btn-outline-secondary'>Edit Store</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateStore;
