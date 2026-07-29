import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import { getPing } from '../services/pingService'
import '../App.css'

function HomePage() {
  const [count, setCount] = useState(0)
  const [pingResult, setPingResult] = useState(null)

  useEffect(() => {
    getPing()
      .then((data) => setPingResult(data.status))
      .catch(() => setPingResult('error de conexión'))
  }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <p>Backend status: <strong>{pingResult ?? 'cargando...'}</strong></p>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        {/* el resto de la sección Documentation/Connect with us se mantiene igual */}
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default HomePage