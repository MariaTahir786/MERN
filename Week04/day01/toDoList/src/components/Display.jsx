import React from 'react'
//these props are coming from app.jsx
const Display = ({ toDoList, setToDoList }) => {

    const handleCheckBox = todo_id => {
        console.log(todo_id)
        let copyToDoList = [...toDoList];

        const updatedCopyToDoList = copyToDoList.map((oneToDo, idx) => idx == todo_id ? { completed: !oneToDo.completed, toDo: oneToDo.toDo } : oneToDo)

        setToDoList(updatedCopyToDoList)
    }



    return (
        <div>
            {
                toDoList.map((oneToDo, idx) => (
                    <div key={idx}>
                        <input type="checkbox" onChange={() => handleCheckBox(idx)} />
                      <p>{oneToDo.toDo}</p>
                        <input type="submit" value="Delete" />
                    </div>


                ))
            }
        </div>
    )
}

export default Display