import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PublicacaoAxios from "../../service/PublicacaoClass";
import './estilos.css'

export default function Create() {
  const [imgPost, setImgPost] = useState("");
  const [legenda, setLegenda] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarPublicacao = (e) => {
    e.preventDefault();

    const publicacao = {legenda, imgPost};

    if (id) {

      PublicacaoAxios.putPublicacao(id, publicacao).then((response) => {
        navigate("/feed");
      });
    } else {
      PublicacaoAxios.postPublicacao(publicacao).then((response) => {
        navigate("/feed");
      }).catch(err => console.log(err))
    }
  };

  useEffect(() => {
    function getPublicacaoById() {
      if (id) {
        PublicacaoAxios.getPublicacaoById(id)
          .then((response) => {
            setImgPost(response.data.imgPost);
            setLegenda(response.data.legenda);
          
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getPublicacaoById();
  }, [id]);

  return (
    
    <div className="container p-4 mt-4">
      <div className="form-bg">
      
          <form className="alinha">
          <div className="row ">
            <fieldset className="p-4">
              <legend>
                <h2 className="text-center">
                  {id ? "Editar" : "Criar Publicação"}
                </h2>
              </legend>
              <div className="mb-3">
                <label htmlFor="Cidade" className="form-label">
                  Legenda:
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue=""
                  value={legenda}
                  onChange={(e) => setLegenda(e.target.value)}
                />
                <label htmlFor="Estado" className="form-label mt-2">
                  URL da publicação:
                </label>
                <input
                  type="text"
                  defaultValue=""

                  className="form-control"
                  onChange={(e) => setImgPost(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => criarOuEditarPublicacao(e)}
              >
                Fazer post
              </button>
              <Link
                to="/Feed"
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
