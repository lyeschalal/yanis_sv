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
Ma très chère Afaf,

     Je prends la plume ce soir pour te dire des choses qui me brûlent le cœur depuis longtemps. Chaque moment passé avec toi est un trésor que je garde précieusement.

     Ta beauté, ta gentillesse et ta lumière illuminent mes jours les plus sombres. Quand tu souris, le monde s'arrête et il n'existe que ce moment magique entre nous.

     Je veux construire mille souvenirs avec toi, rire ensemble jusqu'aux larmes, et affronter chaque défi main dans la main. Tu es bien plus qu'une simple personne pour moi, tu es mon rêve devenu réalité.

     Merci de m'avoir dit oui. Tu viens de rendre l'homme le plus heureux du monde.

     Avec tout mon amour et ma tendresse,

                                        ❤️`

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
    }, 150)

    return () => clearInterval(typeInterval)
  }, [showLetter])

  // // Délai de 2 secondes après Yes
  // useEffect(() => {
  //   if (yesClicked) {
  //     const timer = setTimeout(() => {
  //       setShowLetter(true)
  //     }, 100000)
  //     return () => clearTimeout(timer)
  //   }
  // }, [yesClicked])

  const getRandomPosition = () => {
    const randomX = (Math.random() - 0.5) * 80
    const randomY = (Math.random() - 0.5) * 60
    return { x: randomX, y: randomY }
  }
//   const heartsData = Array.from({ length: 30 }, () => ({
//   left: Math.random() * 100,
//   delay: Math.random() * 5,
//   duration:20 + Math.random() * 20
// }))


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
      zoom += 0.03
      setEnvelopeZoom(zoom)
      if (zoom >= 7) {
        clearInterval(zoomInterval)
        // Une fois zoomé, afficher la lettre et les cœurs
        setTimeout(() => {
          setShowHearts(true)
          setShowLetter(true)
        }, 100)
      }
    }, 10)
  }

  if (showLetter) {
    return (
      <div className="letter-container">
        {showHearts && (
          <div className="hearts-container">
            {   [
  10, 35, 70,
  14, 29,100,
  5, 40, 95,
  25, 80, 20,
  15, 50, 90,
  0, 65, 30
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
            {displayedText.length < letterContent.length && <span className="cursor">|</span>}
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
                width: '120px',
                height: '120px',
                margin: '0 auto',
                cursor: 'pointer',
                transform: `scale(${envelopeZoom})`,
                transformOrigin: 'center',
                transition: 'transform 0.04s linear'
              }}
            >
              <img src="/yanis_sv/envelope.png" alt="envelope" 
              style={{ width: '100%', height: '100%' }}
               />
            </div>
          </div>
          <h1>Yay! You said YES!</h1>
          <p>I'm the happiest person right now!</p>
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
