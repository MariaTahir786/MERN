import React from 'react';
import Tabs from './components/Tabs';

const App = () => {
  const items = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> },
  ];

  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'200px'}}>
      
      <Tabs items={items} />
   
      
      </div>
   
  );
};

export default App;