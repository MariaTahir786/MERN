import React, { useState } from 'react'

const Form = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [views, setViews] = useState('');

    const handleTitle = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }
    const handleYear = (e) => {
        console.log(e.target.value)
        setYear(e.target.value)
    }
    const handleViews = (e) => {
        console.log(e.target.value)
        setViews(e.target.value)
    }

    const createMovie = (e) => {
        e.preventDefault()//this prevents refresh 
        console.log(e)
    }


    return (
        <div>
            <form onSubmit={createMovie}>
                <div>
                    <label htmlFor="title">Movie Title: </label>
                    <input type="text" name="title" id="" onChange={handleTitle} />
                </div>
                <div>
                    <label htmlFor="year">Release Year: </label>
                    <input type="number" name="year" id="" onChange={handleYear} />
                </div>
                <div>
                    <label htmlFor="views">Total views: </label>
                    <input type="number" name="views" id="" onChange={handleViews} />

                </div>
                <br />
                <button type="submit">Add Movie</button>
            </form>
            <div>
                <h2>Movie Title:{title}</h2>
                <h2> Release Year:{year}</h2>
                <h2>Total Views:{views}</h2>
            </div>
        </div>
    )
}

export default Form