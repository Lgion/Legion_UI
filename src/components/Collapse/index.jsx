import React from 'react';

export default ({ props }) => {
  const { id, buttonText, content } = props;

  return (
    <>
      <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
        {buttonText}
      </button>
      <div className="collapse" id={id}>
        <div className="card card-body">
          {content}
        </div>
      </div>
    </>
  );
};
