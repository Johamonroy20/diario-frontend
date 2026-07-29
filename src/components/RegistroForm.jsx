import { useRegistroForm } from '../hooks/useRegistroForm'
import '../styles/components/RegistroForm.scss'


function RegistroForm() {
  const { formData, errores, mensajeExito, enviando, handleChange, handleSubmit } = useRegistroForm()

  return (
    <form className="registro-form" onSubmit={handleSubmit} noValidate>
      <div className="registro-form__campo">
        <label htmlFor="nombreCompleto">Nombre completo</label>
        <input
          type="text"
          id="nombreCompleto"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          aria-describedby={errores.nombreCompleto ? 'error-nombre' : undefined}
        />
        {errores.nombreCompleto && (
          <p className="registro-form__error" id="error-nombre" aria-live="polite">{errores.nombreCompleto}</p>
        )}
      </div>

      <div className="registro-form__campo">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby={errores.email ? 'error-email' : undefined}
        />
        {errores.email && (
          <p className="registro-form__error" id="error-email" aria-live="polite">{errores.email}</p>
        )}
      </div>

      <div className="registro-form__campo">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          aria-describedby={errores.password ? 'error-password' : undefined}
        />
        {errores.password && (
          <p className="registro-form__error" id="error-password" aria-live="polite">{errores.password}</p>
        )}
      </div>

      {errores.general && (
        <p className="registro-form__error registro-form__error--general" aria-live="polite">{errores.general}</p>
      )}

      {mensajeExito && <p className="registro-form__exito" role="status">{mensajeExito}</p>}

      <button type="submit" className="registro-form__boton" disabled={enviando}>
        {enviando ? 'Creando cuenta...' : (
          <>
            Crear cuenta <span className="icon-arrow">→</span>
          </>
        )}
      </button>
    </form>
  )
}

export default RegistroForm