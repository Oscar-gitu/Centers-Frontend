import React from "react";
import { Link } from "react-router-dom";
import "./css/notFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">Pagina no encontrada.</h1>
      <p className="not-found-text">La pagina que estas buscando no existe.</p>
      <Link to="/" className="home-link">
        Regresar a pagina prinicipal
      </Link>
    </div>
  );
};

export default NotFoundPage;
