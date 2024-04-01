import React, { Component } from 'react'

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            year: ''
        }
    }

    changeHandler = e => {
        //we need to refer to state in parent
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addNewMovie(this.state)
        this.setState({
            title: '',
            year: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Add a movie</h1>
                <form onSubmit={this.submitHandler} className='col-md-6 mx-auto'>
                    <div className='form-group mt-3'>
                        <label htmlFor="title" className='form-label'>Title</label>
                        <input type="text" onChange={this.changeHandler} name='title' value={this.state.title} placeholder='enter Movie' className='form-control' />
                    </div>
                    <div className='form-group mt-3'>
                        <label htmlFor="year" className='form-label'>Year</label>
                        <input type="number" onChange={this.changeHandler} name='year' value={this.state.year} placeholder='enter Year' className='form-control' />
                    </div>
                    <button type="submit" className='btn btn-primary mt-3 mb-5'>Submit</button>
                </form>
            </div>
        )
    }


}
export default MovieForm