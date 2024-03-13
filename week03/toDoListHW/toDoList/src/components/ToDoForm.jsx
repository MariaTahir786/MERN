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
      <h1>i-Task Manage Your To Do's at one place</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="toDo" className="col-sm-2 col-form-label">Add A ToDo</label>
          <input type="text"  value={toDo}  onChange={changeHandler}
           className="form-control" 
          />
        </div>
        <input  type="submit" value="Save"

          style={{
            marginTop: '25px',
            marginLeft: '5px',
          }} className="btn btn-success" 
        />
      </form>
    </div>
  );
};

export default ToDoForm;