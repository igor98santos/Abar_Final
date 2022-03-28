import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinosAxios from "../../services/DestinosClass";

export default function Create() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [imgDestino, setImgDestino] = useState("");
  const { idDestino } = useParams();
  const navigate = useNavigate();

  const criarOuEditarDestino = (e) => {
    e.preventDefault();

    const destinos = { city, state, country, descricao, preco, imgDestino };

    if (idDestino) {
      DestinosAxios.putDestinos(idDestino, destinos).then((response) => {
        navigate("/destino");
      });
    } else {
      DestinosAxios.postDestinos(destinos).then((response) => {
        navigate("/destino");
      });
    }
  };

  useEffect(() => {
    function getDestinosById() {
      if (idDestino) {
        DestinosAxios.getDestinosById(idDestino)
          .then((response) => {
            setCity(response.data.city);
            setState(response.data.state);
            setCountry(response.data.country);
            setDescricao(response.data.descricao);
            setPreco(response.data.preco);
            setImgDestino(response.data.imgDestino);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getDestinosById();
  }, [idDestino]);

  return (
    
    <div className="container p-4 mt-4">
      <div className="form-bg">
      
          <form className="alinha">
          <div className="row ">
            <fieldset className="p-4">
              <legend>
                <h2 className="text-center">
                  {idDestino ? "Editar" : "Criar Destino"}
                </h2>
              </legend>
              <div className="mb-3">
                <label htmlFor="Cidade" className="form-label">
                  Cidade
                </label>
                <input
                  type="text"
                  id="destino"
                  className="form-control"
                  placeholder="Digite a Cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <label htmlFor="Estado" className="form-label">
                  Estado
                </label>
                <input
                  type="text"
                  id="Estado"
                  className="form-control"
                  placeholder="Digite o Estado"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <label htmlFor="País" className="form-label">
                  País
                </label>
                <input
                  type="text"
                  id="País"
                  className="form-control"
                  placeholder="Digite o País"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <label htmlFor="descricaoDestino" className="form-label">
                  Digite a Descrição do Destino
                </label>
                <input
                  type="text"
                  id="descricaoDestino"
                  className="form-control"
                  placeholder="Digite a descrição do Destino"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
                <label htmlFor="precoDestino" className="form-label">
                  Digite o Preço
                </label>
                <input
                  type="text"
                  id="precoDestino"
                  className="form-control"
                  placeholder="Digite o preço para o Destino"
                  value={preco}
                  onChange={(e) => setPreco(Number.parseFloat(e.target.value))}
                />
                <label htmlFor="ImgDestino" className="form-label">
                  Link da Imagem do Destino
                </label>
                <input
                  type="text"
                  id="ImgDestino"
                  className="form-control"
                  placeholder="Digite a Imagem do Destino"
                  value={imgDestino}
                  onChange={(e) => setImgDestino(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => criarOuEditarDestino(e)}
              >
                Cadastrar
              </button>
              <Link
                to="/Destinos"
                className="btn btn-danger"
                style={{ marginLeft: "10px" }}
              >
                Cancelar
              </Link>
            </fieldset>
            </div>
          </form>
        
      </div>
    </div>
  );
}
