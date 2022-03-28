import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinosAxios from "../../services/DestinosClass";

export default function PutDeleteDestinos() {
  const [destino, setDestino] = useState([]);

  const getDestinos = () => {
    DestinosAxios.getDestinos()
      .then((response) => {
        setDestino(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDestinos();
  }, []);

  const deleteDestinos = (idDestino) => {
    DestinosAxios.deleteDestinos(idDestino)
      .then((response) => {
        getDestinos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container text-center">
      <div className="row">
        {destino.map((destinos, idDestino) => (
          <div class="col-lg-6 mb-4 mt-4">
            <div className="card m-4">
              <img
                src={destinos.imgDestino}
                alt={"Imagem de " + destinos?.city}
              />
              <tr key={idDestino} className="d-flex flex-column p-4 m-4">
                <td>{destinos.idDestino}</td>
                <td>{destinos.city}</td>
                <td>{destinos.state}</td>
                <td>{destinos.coutry}</td>
                <td>{destinos.preco}</td>
                <td className="container">
                  <Link
                    to={`/Destinos-Update/${destinos.idDestino}`}
                    className="btn btn-info"
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteDestinos(destinos.idDestino)}
                    style={{ marginLeft: "10px" }}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
