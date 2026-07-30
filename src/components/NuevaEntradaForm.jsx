import { useNuevaEntradaForm } from '../hooks/useNuevaEntradaForm'
import '../styles/components/NuevaEntradaForm.scss'

const ETIQUETAS_ANIMO = {
  FELIZ: 'Feliz',
  CALMADO: 'Calmado',
  NEUTRAL: 'Neutral',
  ANSIOSO: 'Ansioso',
  TRISTE: 'Triste',
  ENOJO: 'Enojo',
}

function NuevaEntradaForm() {
  const {
    formData,
    errores,
    mensajeExito,
    enviando,
    estadosAnimo,
    handleChange,
    seleccionarEstadoAnimo,
    handleSubmit,
  } = useNuevaEntradaForm()

  return (
    <form className="nueva-entrada-form" onSubmit={handleSubmit} noValidate>
      <div className="nueva-entrada-form__seccion">
        <p className="nueva-entrada-form__pregunta">¿Cómo te sientes hoy?</p>

        <div className="nueva-entrada-form__grid-animo" role="group" aria-label="Selecciona tu estado de ánimo">
          {estadosAnimo.map((estado) => (
            <button
              key={estado}
              type="button"
              className={`nueva-entrada-form__opcion-animo ${
                formData.estadoAnimo === estado ? 'nueva-entrada-form__opcion-animo--activa' : ''
              }`}
              onClick={() => seleccionarEstadoAnimo(estado)}
              aria-pressed={formData.estadoAnimo === estado}
            >
              {ETIQUETAS_ANIMO[estado]}
            </button>
          ))}
        </div>

        {errores.estadoAnimo && (
          <p className="nueva-entrada-form__error" role="alert">
            {errores.estadoAnimo}
          </p>
        )}
      </div>

      <div className="nueva-entrada-form__campo">
        <label htmlFor="titulo">Título de la reflexión</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="¿Qué nombre le pones a hoy?"
          value={formData.titulo}
          onChange={handleChange}
        />
      </div>

      <div className="nueva-entrada-form__campo">
        <label htmlFor="contenido">Contenido</label>
        <textarea
          id="contenido"
          name="contenido"
          placeholder="Escribe con calma..."
          value={formData.contenido}
          onChange={handleChange}
          rows={8}
          aria-describedby={errores.contenido ? 'error-contenido' : undefined}
        />
        {errores.contenido && (
          <p className="nueva-entrada-form__error" id="error-contenido" role="alert">
            {errores.contenido}
          </p>
        )}
      </div>

      {errores.general && (
        <p className="nueva-entrada-form__error nueva-entrada-form__error--general" role="alert">
          {errores.general}
        </p>
      )}

      {mensajeExito && (
        <p className="nueva-entrada-form__exito" role="status">
          {mensajeExito}
        </p>
      )}

      <button type="submit" className="nueva-entrada-form__boton" disabled={enviando}>
        {enviando ? 'Guardando...' : (
          <>
            Guardar entrada <span className="icon-arrow">➤</span>
          </>
        )}
      </button>
    </form>
  )
}

export default NuevaEntradaForm