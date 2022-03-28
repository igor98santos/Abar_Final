/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import Profile from "../../assets/img/profile.jpg";
import './index.css'

export default function FormularioPerfil() {
  return (
    <>

<div class="card col-lg-3 col-md-3  col-12">
  <div className="">
    
  <img  className="img-perfilx" src={"https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/09/freddie-mercury-1.jpg"} class="card-img-top" alt="..."/>
  <div class="">
  <p id="nome">Anônimo</p>
  <p id="genero">Anônimo</p>
  <a type="button" class="btn btn-success mb-2" 
     href="/createperfil">
                Edite <i class="fas fa-pencil-alt"></i>
             
                </a>  </div>
  </div>
</div>



  
    </>
  );
}
