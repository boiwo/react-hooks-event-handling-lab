// Code EyesOnMe Component Here
import React, { useState } from 'react';

const EventHandlingComponent = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };

  const handleFocus = () => {
    console.log('Good!');
  };

  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <div>
      <input 
        type="password" 
        onChange={() => {}} 
        placeholder="Enter password" 
      />
      <button 
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Eyes on me
      </button>
      {buttonClicked && <p>You clicked the button!</p>}
    </div>
  );
};

export default EventHandlingComponent;