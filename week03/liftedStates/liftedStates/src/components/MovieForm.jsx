import React,{useState} from 'react'
                    //deconstruct down
const MovieForm = ({allMovies,setAllMovies}) => {
       //         getter  setter    
       const [movie, setMovie] = useState({
        title: "",
        year: "",
        genre: ""
    });
 

    const changeHandler = e => {
        console.log("This is NAME ATTRIBUTE ", e.target.name)
        console.log("This is VALUE ", e.target.value)
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const movieHandler = e => {
        e.preventDefault();
        setAllMovies([...allMovies, movie]);
        setMovie({
            title: "",
            year: "",
            genre: ""
        })
    }
  return (
    <div>
         <div className="row">
                <h1>Create Movie</h1>
                <form className="col-md-4 offset-1" onSubmit={movieHandler}>
                    <div className="form-group">
                        {
                            //Conditional Rendering (Ternary Operator)
                            movie.title.length < 3 && movie.title.length !== 0 ?
                                //What do to if true ?
                                <p style={{ "color": "red" }}>Title must be at least 3 characters</p> :
                                null
                        }
                        <label htmlFor="title">Movie Title</label>
                        <input type="text" name="title" className='form-control' onChange={changeHandler} value={movie.title} />
                    </div>
                    <div className="form-group">
                        {
                            //Conditional Rendering (Ternary Operator)
                            movie.year < 1999 && movie.year !== "" ?
                                //What do to if true ?
                                <p style={{ "color": "red" }}>Movie must be released after 1999</p> :
                                null
                        }
                        <label htmlFor="year">Release Year</label>
                        <input type="number" name="year" className='form-control' onChange={changeHandler} value={movie.year} />
                    </div>
                    <div className="form-group">
                        {
                            //Conditional Rendering (Ternary Operator)
                            movie.genre.length < 5 && movie.genre.length !== 0 ?
                                //What do to if true ?
                                <p style={{ "color": "red" }}>Genre must be at least 5 characters</p> :
                                null
                        }
                        <label htmlFor="title">Genre</label>
                        <input type="text" name="genre" className='form-control' onChange={changeHandler} value={movie.genre} />
                    </div>
                    <button className="btn btn-primary">Create Movie</button>
                </form>
            </div>


    </div>
  )
}

export default MovieForm