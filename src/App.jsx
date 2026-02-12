import { useState } from 'react'
import './App.css'

function App() {
  const [yesClicked, setYesClicked] = useState(false)
  const [noCount, setNoCount] = useState(0)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const positions_move = [
  { x: -20, y: 20 },
  { x: 30, y: 0 },
  { x: 20, y: -40 },
  { x: 30, y: 60 }
]
  const avatarData = [
    { image: 'img1.png', text: 'Are you sure' },
    { image: 'img2.png', text: 'Really !!' },
    { image: 'img3.png', text: 'Think again' },
    { image: 'img4.png', text: 'Last chance' }
  ]

  const getRandomPosition = () => {
    const randomX = (Math.random() - 0.5) * 80
    const randomY = (Math.random() - 0.5) * 60
    return { x: randomX, y: randomY }
  }
  
  const handleNoClick = () => {
    if (noCount < 4) {
      // const newPos = getRandomPosition()
      // console.log('New position:', newPos)
      // recuperer la position actuelle du bouton No
      const currentPos = noPosition 
      // ajouter un mouvement aléatoire à la position actuelle
      let move = positions_move[noCount]

      console.log(noCount, positions_move[0])
      
      const newPos = { x: currentPos.x + move.x, y: currentPos.y + move.y }
      setNoPosition(newPos)
      setNoCount(noCount + 1)
    }
  }

  const handleYesClick = () => {
    setYesClicked(true)
  }

  if (yesClicked) {
    return (
      <div className="valentine-container">
        <div className="success-card">
          <div className="heart-animation">💖</div>
          <h1>Yay! You said YES! 💕</h1>
          <p>I'm the happiest person right now!</p>
          <div className="celebration">
            <span>🎉</span>
            <span>🎊</span>
            <span>🎉</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="valentine-container">
      <div className="valentine-card">
        <div className="heart-emoji">💖</div>
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

        <div className="text-display">
          {noCount > 0 && avatarData[noCount - 1].text}
        </div>

        {noCount > 0 && (
          <div className={`avatar-container`}>
            <img
              src={`/yanis_sv/${avatarData[noCount - 1].image}`}
              alt="avatar"
              className="avatar-image"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
