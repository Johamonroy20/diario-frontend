import { Link } from 'react-router-dom'

function NotFoundPage() {
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
    </div>
  )
}

export default NotFoundPage