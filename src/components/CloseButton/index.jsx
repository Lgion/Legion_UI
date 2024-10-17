import React from 'react';

export default ({ props }) => {
  const { white, onClick } = props;

  return (
    <button 
      type="button" 
      className={`btn-close ${white ? 'btn-close-white' : ''}`} 
      aria-label="Close"
      onClick={onClick}
    ></button>
  );
};
