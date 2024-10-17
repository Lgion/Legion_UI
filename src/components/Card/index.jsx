import React from 'react';

export default ({ props }) => {
  const { title, text, imageUrl, linkText, linkUrl } = props;

  return (
    <div className="card" style={{width: "18rem"}}>
      {imageUrl && <img src={imageUrl} className="card-img-top" alt={title} />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {text && <p className="card-text">{text}</p>}
        {linkText && linkUrl && (
          <a href={linkUrl} className="btn btn-primary">{linkText}</a>
        )}
      </div>
    </div>
  );
};
