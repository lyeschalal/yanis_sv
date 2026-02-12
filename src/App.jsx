import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Yanis')

  return (
    <div className="container">
      <header>
        <h1>🚀 Bienvenue sur mon site React !</h1>
        <p>Déployé sur GitHub Pages avec amour 💙</p>
      </header>

      <section className="card">
        <h2>Compteur Interactif</h2>
        <div className="counter">
          <button onClick={() => setCount(count - 1)}>−</button>
          <span className="count">{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <p>Tu as cliqué <strong>{count}</strong> fois !</p>
      </section>

      <section className="card">
        <h2>Ton Nom</h2>
        <input
          type="text"
          placeholder="Entre ton nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Salut {name} ! 👋</p>
      </section>

      <footer>
        <p>Fait avec React ⚛️ et déployé avec GitHub Pages</p>
      </footer>
    </div>
  )
}

export default App
