import { useState } from "react";
import "./App.css";

export default function Formulario() {
  const [formData, setFormData] = useState({
    matricula: "",
    nombre: "",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <div className="top" />
      <div className="bottom" />
      <div className="center">
        {!submittedData ? (
          <>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                name="matricula"
                placeholder="Matrícula"
                value={formData.matricula}
                onChange={handleChange}
              />
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              <input
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                value={formData.apellidos}
                onChange={handleChange}
              />
              <input
                type="text"
                name="edad"
                placeholder="Edad"
                value={formData.edad}
                onChange={handleChange}
              />
              <input
                type="text"
                name="universidad"
                placeholder="Universidad"
                value={formData.universidad}
                onChange={handleChange}
              />
              <input
                type="text"
                name="carrera"
                placeholder="Carrera"
                value={formData.carrera}
                onChange={handleChange}
              />
              <button type="submit" className="btn-enviar">Enviar</button>
            </form>
          </>
        ) : (
          <div className="result">
            <h2>Datos enviados</h2>
            <p><b>Matrícula:</b> {submittedData.matricula}</p>
            <p><b>Nombre:</b> {submittedData.nombre}</p>
            <p><b>Apellidos:</b> {submittedData.apellidos}</p>
            <p><b>Edad:</b> {submittedData.edad}</p>
            <p><b>Universidad:</b> {submittedData.universidad}</p>
            <p><b>Carrera:</b> {submittedData.carrera}</p>
          </div>
        )}
      </div>
    </div>
  );
}
