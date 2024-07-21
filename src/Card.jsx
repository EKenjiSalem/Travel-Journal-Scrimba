import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-location">{props.location}</p>
        <p className="card-description">{props.description}</p>
        <p className="card-locator">
          <a href={props.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
          </p>
      </div>
    </div>
  );
}

export default Card;
