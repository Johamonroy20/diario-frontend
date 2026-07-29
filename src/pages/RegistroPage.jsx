import { Link } from "react-router-dom";
import RegistroForm from "../components/RegistroForm";

function RegistroPage() {
  return (
    <div className="registro-page">
      <header className="registro-page__header">
        <h1 className="heading-brand">JouOff</h1>
      </header>

      <main>
        <RegistroForm />
      </main>

      <p className="registro-page__link">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
}

export default RegistroPage;
