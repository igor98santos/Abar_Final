import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PerfilInfoAxios from "../../service/PerfilInfoClass";

export default function Create() {
  const [apelido, setApelido] = useState("");
  const [text, setText] = useState("");
  const [imagemperfil, setImagemperfil] = useState("");
 ;
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarPerf = (e) => {
    e.preventDefault();

 ;
 const perfil = { apelido, text, imagemperfil};

    if (id) {
      PerfilInfoAxios.putPerfilInfo(id, perfil).then((response) => {
        navigate("/perfil");
      });
    } else {
      PerfilInfoAxios.postPerfilInfo(perfil).then((response) => {
        navigate("/feed");
      });
    }
  };

  useEffect(() => {
    function getPerfilInfoById() {
      if (id) {
        PerfilInfoAxios.getPerfilInfoById(id)
          .then((response) => {
            setApelido(response.data.apelido);
            setText(response.data.text);
            setImagemperfil(response.data.imagemperfil);
          
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getPerfilInfoById();
  }, [id]);

  return (
    
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Apelido</label>
    <input  class="form-control"  value={apelido}
                  onChange={(e) => setApelido(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Algo sobre você</label>
    <input  class="form-control" id="exampleInputPassword1"  value={text}
                  onChange={(e) => setText(e.target.value)}/>
  </div>
  <div class="form-group">
    <label>Foto de Perfil</label>
    <input  class="form-control" value={imagemperfil}
                  onChange={(e) => setImagemperfil(e.target.value)}/>
  </div>
  

  <button type="submit" class="btn btn-primary" onClick={(e) => criarOuEditarPerf(e)}> Atualizar</button>

</form>
  );
}
