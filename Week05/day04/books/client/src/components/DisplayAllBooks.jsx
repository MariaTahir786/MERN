import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const DisplayAllBooks = () => {
  // const{_id}=useParams()
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8000/api/books')
      .then(res => {
        console.log(res.data)
        setBooks(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const clickHandler = e => {
    navigate(`/books/${e.target.value}`)

  }

  return (
    <div>
      <h1 className="text-primary">  All Books</h1>
      <table className="table table-light shadow p-3 mb-5 bg-body-tertiary rounded">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Publish Year</th>
            <th>Genre</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {
            books.map((book, idx) => {
              return <tr key={book._id}>
                <td scope='row'>{idx+1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td>{book.publishYear}</td>
                <td>{book.genre}</td>
                <td>{book.createdAt}</td>
                <td>
                  <button onClick={clickHandler} value={book._id}className='btn btn-primary'>View Book</button>
                </td>
                <var></var>
              </tr>
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default DisplayAllBooks