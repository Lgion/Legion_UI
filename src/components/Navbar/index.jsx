import React from 'react';

export default ({ props }) => {
  const { brand, items } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{brand}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {items.map((item, index) => (
              <li key={index} className="nav-item">
                <a className={`nav-link ${item.active ? 'active' : ''}`} href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
