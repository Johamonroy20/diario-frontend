import NuevaEntradaForm from '../components/NuevaEntradaForm'

function NuevaEntradaPage() {
  return (
    <div className="nueva-entrada-page">
      <header className="nueva-entrada-page__header">
        <h1 className="heading-brand">JouOff</h1>
      </header>

      <main>
        <NuevaEntradaForm />
      </main>
    </div>
  )
}

export default NuevaEntradaPage