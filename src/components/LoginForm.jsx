import { useLoginForm } from '../hooks/useLoginForm'
import '../styles/components/LoginForm.scss'

function LoginForm() {
  const { formData, error, enviando, handleChange, handleSubmit } = useLoginForm()

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <div className="login-form__campo">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby={error ? 'login-error' : undefined}
        />
      </div>

      <div className="login-form__campo">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          aria-describedby={error ? 'login-error' : undefined}
        />
      </div>

      {error && (
        <p className="login-form__error" id="login-error" aria-live="polite">
          {error}
        </p>
      )}

      <button type="submit" className="login-form__boton" disabled={enviando}>
        {enviando ? 'Iniciando sesión...' : (
          <>
            Iniciar sesión <span className="icon-arrow">→</span>
          </>
        )}
      </button>
    </form>
  )
}

export default LoginForm