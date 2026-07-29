import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

function LoginPage() {
  return (
    <div className="login-page">
      <header className="login-page__header">
        <h1 className="heading-brand">JouOff</h1>
      </header>

      <main>
        <LoginForm />
      </main>

      <p className="login-page__link">
        ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
      </p>
    </div>
  )
}

export default LoginPage