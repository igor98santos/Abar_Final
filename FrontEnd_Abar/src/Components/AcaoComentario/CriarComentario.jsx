import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ComentarioAxios from "../../service/ComentarioClass";

export default function CreateComent() {
  const [comentario, setComentario] = useState("");
  
  
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditar = (e) => {
    e.preventDefault();

    const comentarios = { comentario };

    if (id) {
      ComentarioAxios.putComentario(id, comentarios).then((response) => {
        navigate("/coment");
      });
    } else {
      ComentarioAxios.postComentario(comentarios).then((response) => {
        navigate("/coment");
      });
    }
  };

  useEffect(() => {
    function getComentarioById() {
      if (id) {
        ComentarioAxios.getComentarioById(id)
          .then((response) => {
            setComentario(response.data.comentario);
        
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getComentarioById();
  }, [id]);

  return (
    
    <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h6 class="text-center">Commentarios</h6>
      </div>
      <div class="col-lg-12">
        <form>
          <div class="form-group">
            <input
              type="name"
              class="form-control"
             value={comentario}
             onChange={(e) => setComentario(e.target.value)}

            />
          </div>
          <div class="form-group text-rigth">
            <button
              type="submit"
              id="comment-add"
              class="btn-primary"

              onClick={(e) => criarOuEditar(e)}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      <div class="col-lg-6">
        <span>....</span>
      </div>
      <div class="col-lg-6">
        <div id="comment-field"></div>
      </div>
    </div>
  </div>
  );
}
