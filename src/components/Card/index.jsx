import React from 'react';
import {WrapperRaw} from '../../wrappers'; // Assurez-vous que le chemin est correct

const _data = {
  title: 'Titre de la carte',
  text: 'Texte de la carte',
  imageUrl: 'https://via.placeholder.com/150',
  linkText: 'En savoir plus',
  linkUrl: '#',
};

export default ({ _, children, $ = _data }) => {
  const { title, text, imageUrl, linkText, linkUrl } = $ || _ || children;

  return (
    <WrapperRaw>
      <div className="card" style={{ width: "18rem" }}>
        {imageUrl && <img src={imageUrl} className="card-img-top" alt={title} />}
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          {text && <p className="card-text">{text}</p>}
          {linkText && linkUrl && (
            <a href={linkUrl} className="btn btn-primary">{linkText}</a>
          )}
        </div>
      </div>
    </WrapperRaw>
  );
};
