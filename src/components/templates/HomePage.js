// React core
import React from 'react'

// Components
import Card from '../modules/Card'

function HomePage() {
  // Data
  const information = require('../../information.json');
  const cards = information.map((item) =>
    <Card key={item.id} prop={item} />
  )

  // Render
  return (
    <div className="HomePage">
      <header className="Header light">
        <img src={require('../../assets/images/logo/logo-light.svg')} alt="ReactTube logo" />
      </header >

      <div className="container">
        <h1 className="title">Recommended</h1>
        <section className="grid">
          {cards}
        </section>
      </div>
    </div>
  );
}

export default HomePage;