import React, { useState } from 'react';

const BoxGenerator = () => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [boxes, setBoxes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (color.trim() === '' || size <= 0) {
      return; 
    }

    const newBox = {
      color: color,
      size: size + 'px',
    };

    setBoxes((previousBoxes) => [...previousBoxes, newBox]);
    setColor(''); 
    setSize('');
  };

  const colorChangeHandler = (e) => {
    setColor(e.target.value);
  };

  const sizeChangeHandler = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
   <div>
    <h1>Box Generator</h1>
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="color" >Color:
          <input type="text" name="color" value={color} style={{ marginLeft: '20px',marginBottom:'20px' }} onChange={colorChangeHandler} />
        </label>
      </div>
      <div>
        <label htmlFor="size">Box Size:
          <input type="number" name="size" value={size} style={{ marginLeft: '20px' ,marginBottom:'20px'}} onChange={sizeChangeHandler} />
        </label>
      </div>

      <button type="submit" style={{ marginBottom:'20px'}}>Add Box</button>
    </form>
  </div> 
  <div>
    <span style={{backgroundColor: color,width:size,height:size,display:'inline-block',marginRight:'5px'}}></span>
    {boxes.map((box,idx)=>(
      <span key={idx} style={{backgroundColor: box.color,width:box.size,height:box.size,display:'inline-block',marginRight:'5px'}}></span>
    ))}
    
   
  </div>
  </>
  );
};

export default BoxGenerator;
