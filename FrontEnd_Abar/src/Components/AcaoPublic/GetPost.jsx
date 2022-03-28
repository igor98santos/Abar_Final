import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PublicacaoAxios from "../../service/PublicacaoClass";
import CriarComentario from '../AcaoComentario/CriarComentario'
import "./estilos.css";

export default function Publicacao() {
  const [publicacao, setPublicacao] = useState([]);

  const getPublicacao = () => {
    PublicacaoAxios.getPublicacao()
      .then((response) => {
        setPublicacao(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPublicacao();
  }, []);

  return (
    <div>
      {publicacao.map((publicacao) => {
        return (
          <div class="bg-light mb-3 postagemX" key={publicacao.id}>
            <img
              class="rounded-circle m-1 p-2"
              width={50}
              height={50}
              src={
                "https://media-exp1.licdn.com/dms/image/C4D22AQF4KuDYDdz9cA/feedshare-shrink_800/0/1647604816442?e=1650499200&v=beta&t=NSs0BOy3FGfL3y5taFPH4IucePaJJjXM5TW-DLm-VVY"
              }
            />

            <div class="d-inline-block">
              <h5 class="user-name">
                <a>Anônimo</a>
              </h5>
            </div>
            <div className="text-end">
              <Link
                to="/PutDeletePublicacao"
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
            <p>{publicacao?.legenda}</p>
            <img
              src={publicacao?.imgPost}
              alt={""}
              class="img-fluid rounded-3"
            />
            <div class="card-body">
              <div class="container">
                <div class="row">
                  <button class="btn btn-cor btn-post col-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="22"
                      fill="currentColor"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </button>

                  <button class="btn btn-cor btn-post col-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="22"
                      fill="currentColor"
                      class="bi bi-chat-square-text-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                    </svg>
                  </button>
                  <button class="btn btn-cor btn-post col-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="22"
                      fill="currentColor"
                      class="bi bi-share-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                    </svg>
                  </button>
                </div>
              </div>
              <CriarComentario></CriarComentario>
              <div ><a className="btn" href="/coment">Lista Comentarios</a></div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
}
