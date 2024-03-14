import React from 'react';

const ToDoDisplay = ({ toDos, removeToDo, toggleToDo }) => {
  return (
    <div>

      {toDos.map((todo) => (
        <div key={todo.id} style={{ display: "flex",
        justifyContent: "space-evenly",
        width: "450px",
        alignItems: 'center',
        margin: '0 auto' ,
        marginTop:"25px"}}>
          <input className="form-check-input"
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => toggleToDo(todo.id)}
          />
          <span style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button 
          onClick={() => removeToDo(todo.id)} style={{
            marginLeft: '5px', padding: '5px 10px', fontSize: '12px' 
          }} className="btn btn-danger">Delete</button>
        </div>
      ))}

    </div>
  );
};

export default ToDoDisplay;
