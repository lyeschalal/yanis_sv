import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [yesClicked, setYesClicked] = useState(false)
  const [showLetter, setShowLetter] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [envelopeClicked, setEnvelopeClicked] = useState(false)
  const [envelopeZoom, setEnvelopeZoom] = useState(1)
  const [showHearts, setShowHearts] = useState(false)
  const [noCount, setNoCount] = useState(0)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  
  const positions_move = [
    { x: 50, y: 0 },
    { x: -20, y: 40 },
    { x: -180, y: 40 },
    { x: 30, y: 60 }
  ]
  
  const avatarData = [
    { image: 'https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyMXVzYjBrbjJteW9kdnAwZXZ1YXBjNjl4bG9lMDZ4MnUxd3NkcXByMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XgB1iZOFFkUXbOhNXt/200w.gif', text: 'Are you sure' },
    { image: 'https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyMnB6YTZpNWR6MzA4ZWhyamQzZTgyejhoMmloODJmd2JvaWtscm9xcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XD4qHZpkyUFfq/giphy.gif', text: 'Really !!' },
    { image: 'https://media.tenor.com/tqM1osvFOQoAAAAM/crying.gif', text: 'Think again' },
    { image: 'https://media1.tenor.com/m/73WoNZZmig8AAAAd/emmanuel-macron.gif', text: '' }
  ]
// const delai = [
//   0, 1.8, 4.7,
//   2.7, 2.7, 4.5,
//   1.8, 3.2, 4.0,
//   2, 3, 4.0,
//   2.2, 3.6, 4.8,
//   3, 4, 5
// ]
const delai = [
  0, 0.6, 1.2,
  0.3, 0.9, 1.5,
  0.6, 1.2, 1.8,
  0.9, 1.5, 2.1,
  1.2, 1.8, 2.4,
  1.5, 2.1, 2.7
]



  const letterContent = `
Ma  chère Afaf,

     Je voulais prendre un petit moment pour te dire que je suis vraiment content de t’avoir dans ma vie. Depuis qu’on se connaît, il y a plein de moments simples mais importants pour moi : des discussions, des rires, et juste le fait de passer du temps ensemble. Tu es trop importante pour moi et tu es la meilleure.

Tu apportes quelque chose de positif dans mes journées, et ça me fait toujours plaisir de te voir ou de parler avec toi. J’espère qu’on continuera à partager encore beaucoup de moments comme ça, tranquillement, à notre façon, et qu’on pourra construire ensemble un new chapter, a new beginning.

Ça me fait vraiment plaisir de t’avoir à mes côtés 🤍

Ma chère Afaf que j’aime,  
Ton nisou préféré.,`

  // Effet de typing
  useEffect(() => {
    if (!showLetter) return

    let currentIndex = 0
    let currentText = ''

    const typeInterval = setInterval(() => {
      if (currentIndex < letterContent.length) {
        currentText += letterContent[currentIndex]
        currentIndex++
        setDisplayedText(currentText)
      } else {
        clearInterval(typeInterval)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [showLetter])



  const getRandomPosition = () => {
    const randomX = (Math.random() - 0.5) * 80
    const randomY = (Math.random() - 0.5) * 60
    return { x: randomX, y: randomY }
  }



  const handleNoClick = () => {
    if (noCount < 4) {
      const currentPos = noPosition
      let move = positions_move[noCount]
      const newPos = { x: currentPos.x + move.x, y: currentPos.y + move.y }
      setNoPosition(newPos)
      setNoCount(noCount + 1)
    }
  }

  const handleYesClick = () => {
    setYesClicked(true)
  }

  const handleEnvelopeClick = () => {
    // Animer le zoom de l'enveloppe sur place
    let zoom = 1
    const zoomInterval = setInterval(() => {
      zoom += 0.05
      setEnvelopeZoom(zoom)
      if (zoom >= 7) {
        clearInterval(zoomInterval)
      }
    }, 1)
    
    // Afficher la lettre et les cœurs pendant que l'enveloppe se fane
    setTimeout(() => {
      setShowHearts(true)
      setShowLetter(true)
    }, 600)
  }

  if (showLetter) {
    return (
      <div className="letter-container">
        {showHearts && (
          <div className="hearts-container">
            {   [
  10, 30000000000005, 70,
  14, 200000009,100,
  5, 4000000000, 95,
  20000000005, 800000, 20,
  15, 500000000, 900000000,
  0, 60000000005, 50
].map((position, i) => (
              <div 
                key={i}
                className="falling-heart"
                style={{
                  left: position + '%',
                  // animationDelay: delai[i%10] + 's'
                  animationDelay:4/ delai[i % delai.length] + 's'

                }}
              >
                <img src={`/yanis_sv/coeur-0${(i % 4) + 1}.png`} alt="heart" />
              </div>
            ))}


          </div>
        )}
        <div className="letter">
          <pre className="letter-text">
            {displayedText}
            {displayedText.length < letterContent.length && <span className="cursor">🪶</span>}
          </pre>
        </div>
      </div>
    )
  }

  if (yesClicked) {
    return (
      <div className="valentine-container">
        <div className="success-card">
          <div className="heart-animation" onClick={handleEnvelopeClick}>
            <div
              style={{
                width: '215px',
                height: '150px',
                margin: '0 auto',
                cursor: 'pointer',
                transform: `scale(${envelopeZoom})`,
                transformOrigin: 'center',
                transition: 'transform 0.04s linear, opacity 0.04s linear',
                opacity: Math.max(0, 1 - (envelopeZoom - 1) / 6)
              }}
            >
              <img src="/yanis_sv/envelope.png" alt="envelope" 
              style={{ width: '100%', height: '100%' }}
               />
            </div>
          </div>
          <h1>Yay! You said YES!</h1>
          <p>touch the envelope and read my words!</p>
          <div className="celebration">
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="valentine-container">
      <div className="valentine-card">
        <div className="heart-emoji">
          <img className="heart-image" src="/yanis_sv/heart.png" alt="heart" />
        </div>
        <h1>Afaf will you be my valentine?</h1>

        <div className="buttons-container">
          <button className="btn btn-yes" onClick={handleYesClick}>
            Yes
          </button>

          {noCount < 4 && (
            <button
              className="btn btn-no"
              onClick={handleNoClick}
              style={{
                transform: `translate(${noPosition.x}px, ${noPosition.y}px)`
              }}
            >
              No
            </button>
          )}
        </div>

        

        {noCount > 0 && (
          <div className={`avatar-container avatar-${noCount}`}>
            <img
              src={`${avatarData[noCount - 1].image}`}
              alt="avatar"
              className="avatar-image"
            />
            <div className="avatar-text">
              {avatarData[noCount - 1].text}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
