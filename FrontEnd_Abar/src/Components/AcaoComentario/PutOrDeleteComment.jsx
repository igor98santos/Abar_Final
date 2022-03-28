import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ComentarioAxios from '../../service/ComentarioClass'
import Navbar from "../Navbar/Navbar";

export default function PutDeleteDestinos() {
  const [comentario, setComentario] = useState([]);

  const getComentario = () => {
    ComentarioAxios.getComentario()
      .then((response) => {
        setComentario(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getComentario();
  }, []);

  const deleteComentarios = (id) => {
    ComentarioAxios.deleteComentarios(id)
      .then(() => {
        getComentario();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <Navbar></Navbar>
    <div>
        {comentario.map((comentario) => {
          return (
            <><div className="text-center">
              <h3>Comentario:</h3>
            </div><div class="bg-light mb-3 postagemX" key={comentario.id}>
                <img
                  class="rounded-circle m-1 p-2"
                  width={50}
                  height={50}
                  src={"https://media-exp1.licdn.com/dms/image/C4D22AQF4KuDYDdz9cA/feedshare-shrink_800/0/1647604816442?e=1650499200&v=beta&t=NSs0BOy3FGfL3y5taFPH4IucePaJJjXM5TW-DLm-VVY"} />
  
                <div class="d-inline-block">
                  <h5 class="user-name">
                    <a>Anônimo</a>
                  </h5>
                </div>
                <div className="text-end">
            <Link
                    to={`/createcomment-Update/${comentario.id}`}
                    className="btn btn-info"
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteComentarios(comentario.comentario)}
                    style={{ marginLeft: "10px" }}
                  >
                    Deletar
                  </button>
                </div>
                <div className="border border-5">
                  <p>{comentario?.comentario}</p>
  
                </div>
              </div></>
          );
        })}
      </div></>
    );
}
