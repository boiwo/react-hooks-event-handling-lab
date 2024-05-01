
import React, { useState } from 'react';

const EventHandlingComponent = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };

  const handleInputChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      <input 
        type="password" 
        onChange={handleInputChange} 
        placeholder="Enter password" 
      />
      <button onClick={handleClick}>Click Me</button>
      {buttonClicked && <p>You clicked the button!</p>}
    </div>
  );
};

export default EventHandlingComponent;