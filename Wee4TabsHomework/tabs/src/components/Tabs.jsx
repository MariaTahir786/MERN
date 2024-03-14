import React, { useState } from 'react';

const Tabs = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    
    <div className="tabs" style={{ display: 'flex', justifyContent:'center',flexDirection: 'column', alignItems: 'center' }}>
      <div><h1>Tabs Practice</h1></div>
      <div className="tab-buttons">
        {items.map((item, index) => (
           
          <button
            key={index}
            className={`tab-button ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          style={{background:'black',marginLeft:'10px',width:'90px',height:'30px'}}>
            {item.label}
          </button>
        ))}
      </div>
      <div className="tab-content" style={{background:'white',color:'red',border:'2px solid black',height:'30vh',width:'90vh',marginTop:'25px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {items[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
