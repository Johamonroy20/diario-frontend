import RegistroForm from '../components/RegistroForm'

function RegistroPage() {
  return (
    <div className="registro-page">
      <header className="registro-page__header">
        <h1 className="heading-brand">JouOff</h1>
      </header>

      <main>
        <RegistroForm />
      </main>
    </div>
  )
}

export default RegistroPage