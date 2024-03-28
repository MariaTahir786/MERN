import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const BookForm = () => {

    const [book, setBook] = useState({
        title: '',
        author: '',
        publishYear: '',
        pages: '',
        genre: ''
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const changeHandler = e => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault()
        console.log(e)
        axios.post('http://localhost:8000/api/books', book)
            .then(res => {
                console.log(res)
                setBook({
                    title: '',
                    author: '',
                    publishYear: '',
                    pages: '',
                    genre: ''
                })
                //this will navigate to home page once promise is success so use navigate if we want user to see it on home page after creating, this is optional
                navigate('/')
            })
            .catch(err => {
                console.log(err.response.data)
                setErrors(err.response.data.errors)
            })
    }


    return (
        <div>
            <form onSubmit={submitHandler} className='col-md-4 offset-4'>
                <h1 className='text-primary'>Create a Book</h1>
                <div className='mb-3'>
                    <label htmlFor="title" className='form-label'>Title</label>
                    {/* // onChange={e=>setBook({...book,title:e.target.value})} /> */}
                    <input type="text" onChange={changeHandler} name='title' value={book.title} className='form-control'/>
                    {/* //to display error message */}
                    {errors.title ? <p className='text-danger'>{errors.title.message}</p> : null}
                </div>
                <div className='mb-3'>
                    <label htmlFor="author" className='form-label'>Author</label>
                    <input type="text" onChange={changeHandler} name='author' value={book.author} className='form-control'/>
                    {/* //to display error message */}
                    {errors.author ? <p className='text-danger'>{errors.author.message}</p> : null}
                </div>
                <div className='mb-3'>
                    <label htmlFor="pages" className='form-label'>Pages</label>
                    <input type="number" onChange={changeHandler} name='pages' value={book.pages} className='form-control' />
                    {/* //to display error message */}
                    {errors.pages ? <p className='text-danger'>{errors.pages.message}</p> : null}
                </div>
                <div className='mb-3'>
                    <label htmlFor="publishYear" className='form-label'>Publish Year</label>
                    <input type="number" onChange={changeHandler} name='publishYear' value={book.publishYear} className='form-control'/>
                    {/* //to display error message */}
                    {errors.publishYear ? <p className='text-danger'>{errors.publishYear.message}</p> : null}
                </div>
                <div className='mb-3'>
                    <label htmlFor="genre" className='form-label'>Genre</label>
                    <input type="text" onChange={changeHandler} name='genre' value={book.genre} className='form-control' />
                    {/* //to display error message */}
                    {errors.genre ? <p className='text-danger'>{errors.genre.message}</p> : null}
                </div>
                <div>
                    <div className="mb-3 d-flex justify-content-end"></div>
                </div>
                <button type="submit" className='btn btn-primary'>Create a Book</button>
            </form>

        </div>
    )
}

export default BookForm