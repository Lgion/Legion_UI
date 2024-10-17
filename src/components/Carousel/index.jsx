import React from 'react';

export default ({ props }) => {
  const { items, id = 'carouselExampleControls' } = props;

  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={item.imageUrl} className="d-block w-100" alt={item.alt || `Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Précédent</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Suivant</span>
      </button>
    </div>
  );
};
