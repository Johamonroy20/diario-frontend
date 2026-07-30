import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export function useLoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  const { iniciarSesion } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setEnviando(true);

    try {
      await iniciarSesion(formData);
      navigate("/entradas/nueva");
    } catch (err) {
      setError(
        err.response?.data?.error || "Ocurrió un error al iniciar sesión",
      );
    } finally {
      setEnviando(false);
    }
  }

  return { formData, error, enviando, handleChange, handleSubmit };
}
