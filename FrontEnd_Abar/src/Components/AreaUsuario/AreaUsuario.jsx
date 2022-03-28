import FormularioPerfil from "../LateralPerfil/FormularioPerfil";
import React from "react";
import ColunaPostagem from "../ColunaPostagem/ColunaPostagem";
import Capa from "../Capa/Capa";



export default function AreaUsuario(){
return(
    <>
    <div class="container mt-2">

        <div class="row">
        <Capa></Capa>
        <FormularioPerfil></FormularioPerfil>
        <ColunaPostagem></ColunaPostagem>
        </div>
        </div>
    </>
)
}