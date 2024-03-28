import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const DisplayOneBook = () => {

    const [singleBook, setSingleBook] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(res => {
                console.log(res.data)
                setSingleBook(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    const deleteHandler = e => {
        axios.delete(`http://localhost:8000/api/books/${id}`)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const editHandler = e => {
        console.log(e)
        navigate(`/books/edit/${id}`)

    }

    return (
        <div className='col-md-4 offset-4'>
            <h1>{singleBook.title}</h1>
            <p className='mt-3'>Author: {singleBook.author}</p>
            <p className='mt-3'>Pages: {singleBook.pages}</p>
            <p className='mt-3'>Publish Year: {singleBook.publishYear}</p>
            <p className='mt-3'>Genre: {singleBook.genre}</p>
            <p className='mt-3'>Date: {singleBook.createdAt}</p>
            <button onClick={editHandler} value={singleBook._id }  className='btn btn-primary'>Edit Book</button>
            <button onClick={deleteHandler}  className='btn btn-danger ms-4'>Delete Book</button>


        </div>
    )
}

export default DisplayOneBook