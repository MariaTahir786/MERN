import React, { useState } from 'react'
//2 we deconstructed the props here directly from app here
const Form = ({ toDoList, setToDoList }) => {
    //initialise state for new todo
    //                      pass object in use state
    const [newToDo, setNewToDo] = useState({
        toDo: "",
        completed: false
    })


    const handleSubmit = e => {//5
        e.preventDefault()
        //this setTodoList is coming from app and we have to cxreate a copy of it and this copy will hold newToDo from useState of this what users enters
        setToDoList([...toDoList, newToDo])//6
        //now we will update newToDo which is a getter
        //this time we will use index no to set as an id as the rae unique for setting we have to crteate a
        setNewToDo({//7 this is coming from useState 
            toDo: "",
            completed: false
        })
       
    }

    const createToDo = e => {//8
        //function to update toDo text as user types
        setNewToDo({
            toDo: e.target.value,
            completed: false
        })
        console.log(e.target.value)
    }


    return (
        <div>
            {/* 4Step */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="toDo" style={{ marginRight: "25px" }} className="form-label">Add To Do</label>
                    <input type="text" onChange={createToDo} value={newToDo.toDo} className="form-control" />
                </div>
                <input type="submit" value="Add" style={{ marginTop: "25px" }} className="btn btn-success" />
            </form>
        </div>
    )
}

export default Form