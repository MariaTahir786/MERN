import React, { useState } from 'react';

const ToDoForm = ({ addToDo }) => {
  const [toDo, setToDo] = useState('');

  const changeHandler = (e) => {
    setToDo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (toDo.trim() === '') return;

    
    const newToDo = {
      text: toDo,
      isComplete: false,
      id: Math.floor(Math.random() * 10000).toString(),
    };

    addToDo(newToDo);

    setToDo('');
  };

  return (
    <div className="container">
      <div>i-Task Manage Your To Do's at one place</div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="toDo">Add A ToDo</label>
          <input
            type="text"
            value={toDo}
            onChange={changeHandler}
            style={{
              marginTop: '25px',
              marginLeft: '10px',
            }}
          />
        </div>
        <input
          type="submit"
          value="Save"
          style={{
            marginTop: '25px',
            marginLeft: '5px',
          }}
        />
      </form>
    </div>
  );
};

export default ToDoForm;