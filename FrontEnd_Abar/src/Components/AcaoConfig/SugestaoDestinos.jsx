import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DestinosAxios from "../../services/DestinosClass";
import './estilos.css';

export default function Destinos() {
  const [destinos, setDestinos] = useState([]);

  const getDestinos = () => {
    DestinosAxios.getDestinos()
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDestinos();
  }, []);

  return (
    <div className="container text-center">
      <div className="row">
        {destinos.map((destinos, key) => {
          return (
            <div class="col-lg-4 mb-4 mt-4" key={key}>
              <div class="card rounded">
                <div
                  class="bg-image hover-overlay ripple rounded-3"
                  data-ripple-color="light"
                >
                  <img
                    src={destinos?.imgDestino}
                    alt={"Imagem de " + destinos?.city}
                    class="img-fluid rounded-3"
                  />
                </div>
                <div class="card-body">
                  <h2
                    class="card-title text-body"
                  >
                    <Link to="/PutDeleteDestinos">
                      <strong>{destinos?.city}</strong>
                    </Link>
                  </h2>
                  <h4 class="card-text">
                    {destinos?.state} - {destinos?.country}
                  </h4>

                  <p className="h4"> R$ {destinos.preco}</p>
                  <p className="card-body p-0">{destinos?.descricao} </p>
                  <Link to="/PutDeleteDestinos" className="btn btn-primary">
                    Editar
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        to="/CriarDestino"
        className="btn btn-primary text-white d-flex justify-content-center p-4 m-4"
      >
        Criar uma sugestão de Destino
      </Link>
    </div>
  );
}
