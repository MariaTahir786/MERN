import React from 'react';

const ToDoDisplay = ({ toDos, removeToDo, toggleToDo }) => {
  return (
    <div>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => toggleToDo(todo.id)}
            />
            <span style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => removeToDo(todo.id)}style={{
            marginTop: '25px',
            marginLeft: '5px',
          }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoDisplay;
