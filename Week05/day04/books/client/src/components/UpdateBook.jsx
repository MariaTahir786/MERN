
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const UpdateBook = () => {
  const { id } = useParams()

  //before submit form grab info from db to show user to update existing book in form  this useState will hold current book then using getter we can edit and send book to end point see in axios put request
  const [book, setBook] = useState({
    title: '',
    author: '',
    publishYear: '',
    pages: '',
    genre: ''
  })

  //we use this use stae errors to check user should not send empty or error updates to db thats why we use if in axios promise 
  const [errors, setErrors] = useState({})

  //we use navigate to navigate to homepage once updates are done
  const navigate = useNavigate()

//use effect used to show the contents in fields to update
  useEffect(() => {
    axios.get(`http://localhost:8000/api/books/${id}`)
        .then(res => {
            console.log(res.data)
            setBook(res.data)
        })
        .catch(err => console.log(err))
}, [])

  const changeHandler = e => {
    setBook({ ...book, [e.target.name]: e.target.value })
}

  const submitHandler = e => {
    e.preventDefault()
    //console.log(e)
    axios.put(`http://localhost:8000/api/books/${id}`, book)
      .then(res => {
        if (res.data.errors) {
          console.log(res.data.errors)
          setErrors(res.data.errors)
        } else {
          navigate('/')
        }

      })
      .catch(err => {
        console.log(err.response.data)
        setErrors(err.response.data.errors)
      })
  }


  return (
    <div>
       <form onSubmit={submitHandler} className='col-md-4 offset-4'>
                <h1 className='text-primary'>Update Book</h1>
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
                <button type="submit" className='btn btn-primary'>Edit Book</button>
            </form>
    </div>
  )
}

export default UpdateBook