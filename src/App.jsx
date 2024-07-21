import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import travelData from './data';

function App() {
  const cards = travelData.map(item => (
    <Card
      key={item.id}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      description={item.description}
      imageUrl={item.imageUrl}
    />
  ));

  return (
    <>
      <div className="container">
        <nav className="navbar">
          <h1>
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            My Travel Journal
          </h1>
        </nav>
        <div className="card-container">
          {cards}
        </div>
      </div>
    </>
  );
}

export default App;
