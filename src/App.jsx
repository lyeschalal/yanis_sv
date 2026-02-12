import { useState } from 'react'
import './App.css'

function App() {
  const [yesClicked, setYesClicked] = useState(false)
  const [noCount, setNoCount] = useState(0)

  const avatars = [
    { emoji: '🤔', text: 'Are you sure' },
    { emoji: '😭', text: 'Really !!' },
    { emoji: '😢', text: 'Think again' },
    { emoji: '🐕', text: 'Last chance' }
  ]

  const handleNoClick = () => {
    if (noCount < 4) {
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
              className={`btn btn-no no-btn-${noCount}`}
              onClick={handleNoClick}
            >
              No
            </button>
          )}
        </div>

        {noCount > 0 && (
          <div className={`avatar avatar-${noCount}`}>
            <span className="avatar-emoji">{avatars[noCount - 1].emoji}</span>
            <p className="avatar-text">{avatars[noCount - 1].text}</p>
          </div>
        )}
      </div>

      {noCount === 4 && (
        <div className="final-message">
          <p>No button is gone! Say YES now! 😄</p>
        </div>
      )}
    </div>
  )
}

export default App
