import { Link } from "react-router-dom";
import zenIcon from "../assets/zen-icon.png";
import arrowIcon from "../assets/arrow-icon.svg";
import "../styles/components/LandingPage.scss";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page__content">
        <div className="landing-page__logo-section">
          <img src={zenIcon} alt="" className="landing-page__waves" />
          <h1 className="landing-page__brand">JouOff</h1>
        </div>

        <p className="landing-page__tagline">Tu diario emocional, día a día.</p>
        <p className="landing-page__description">
          Escribe, revisa tus patrones y conócete un poco mejor a través de la
          reflexión consciente.
        </p>

        <Link to="/registro" className="landing-page__boton">
          Comenzar
          <img src={arrowIcon} alt="" className="icon-arrow" />
        </Link>
      </div>

      <footer className="landing-page__footer">
        <Link to="/login">Ya tengo cuenta</Link>
        <p>© 2024 JOUOFF INTERACTIVE • BARCELONA STUDIO</p>
      </footer>
    </div>
  );
}

export default LandingPage;
