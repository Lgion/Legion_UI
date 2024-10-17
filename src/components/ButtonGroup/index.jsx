import React from 'react';

export default ({ props }) => {
  const { buttons, vertical, size } = props;

  const groupClasses = `btn-group${vertical ? '-vertical' : ''} ${size ? `btn-group-${size}` : ''}`;

  return (
    <div className={groupClasses} role="group" aria-label="Button group">
      {buttons.map((button, index) => (
        <button 
          key={index} 
          type="button" 
          className={`btn btn-${button.type || 'primary'}`}
          onClick={button.onClick}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};
