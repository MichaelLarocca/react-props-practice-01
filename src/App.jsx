import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import places from './data'
import Card from './components/Card'
import Hero from './components/Hero'

// import Tatooine from './assets/img/Tatooine.jpeg';
// import Hoth from './assets/img/Hoth.jpeg';
// import Endor from './assets/img/Hoth.jpeg';   

function App() {

      const cards = places.map(place => {
        return <Card
          key={place.name}
          name={place.name}
          description={place.description}
          image={place.image}
        />
  })

  return (
    <div className="app">
      <Navbar />
        <div class="ctn">
        <Main />
        <Hero />
        <section className="cards-list">
        {cards}
        </section>
      </div>
    </div>
  )
}

export default App
