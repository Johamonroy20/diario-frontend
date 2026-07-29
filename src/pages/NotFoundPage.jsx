import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function NotFoundPage() {
  const { estaAutenticado, cerrarSesion } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    cerrarSesion()
    navigate('/login')
  }

  return (
    <div className="notfound-page">
      <div className="notfound-page__icon">×_×</div>
      <h1 className="notfound-page__code">404</h1>
      <h2 className="notfound-page__title">Esta página no existe</h2>
      <p className="notfound-page__text">
        Puede que la entrada haya sido eliminada o que la dirección esté mal escrita.
      </p>
      <Link to="/" className="notfound-page__boton">
        ← Volver al diario
      </Link>
      
      {estaAutenticado && (
        <button onClick={handleLogout} className="notfound-page__logout">
          Cerrar sesión
        </button>
      )}
    </div>
  )
}

export default NotFoundPage