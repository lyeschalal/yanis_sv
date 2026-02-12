import { useState } from 'react'
import './App.css'

function App() {
  const [yesClicked, setYesClicked] = useState(false)
  const [noCount, setNoCount] = useState(0)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })

  const avatarData = [
    { image: 'sad man.png', text: 'Are you sure' },
    { image: 'man in glasses crying.png', text: 'Really !!' },
    { image: 'Frame 4.png', text: 'Think again' },
    { image: 'Frame 7.png', text: 'Last chance' }
  ]

  const getRandomPosition = () => {
    const randomX = (Math.random() - 0.5) * 80
    const randomY = (Math.random() - 0.5) * 60
    return { x: randomX, y: randomY }
  }

  const handleNoClick = () => {
    if (noCount < 4) {
      const newPos = getRandomPosition()
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

        {noCount > 0 && (
          <div className={`avatar-container`}>
            <img
              src={`/yanis_sv/${avatarData[noCount - 1].image}`}
              alt="avatar"
              className="avatar-image"
            />
            <p className="avatar-text">{avatarData[noCount - 1].text}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
