import React from 'react';

const ToDoDisplay = ({ toDos, removeToDo, toggleToDo }) => {
  return (
    <div>
      
        {toDos.map((todo) => (
          <div key={todo.id}>
            <input className="form-check-input"
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => toggleToDo(todo.id)}
            />
            <span style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => removeToDo(todo.id)}style={{
            marginTop: '15px',
            marginLeft: '5px',
          }}  className="btn btn-danger">Delete</button>
        </div>
        ))}
     
    </div>
  );
};

export default ToDoDisplay;
