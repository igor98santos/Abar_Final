import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ComentarioAxios from "../../service/ComentarioClass";
import "./estilos.css";
import ComentarioClass from "../../service/ComentarioClass";
import Navbar from "../Navbar/Navbar";

export default function Comentarios() {
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

  return (
  <><Navbar></Navbar><div>
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
                  to="/putdeletecomment"
                  className="btn btn-light editPOst "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </Link>
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
