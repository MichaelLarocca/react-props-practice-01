import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import places from './data'
import Card from './components/Card'

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
    <div className="App">
      <Navbar />
      <Main />
      {cards}
    </div>
  )
}

export default App
