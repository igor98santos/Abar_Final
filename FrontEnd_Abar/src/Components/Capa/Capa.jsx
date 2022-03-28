/* eslint-disable jsx-a11y/alt-text */
import fotoCapa from '../../assets/img/publicação01.jpg'
import React from "react";
import './capa.css'


export default function Capa() {
  return (
    <>
      {/* Capa do usuario */}
      <div id="CapaSize" class="bg rounded-top rounded-end mt-1">
        <div class="p-3">
          <div class="row">
            <img  className='img-capa' src={fotoCapa}/>
          </div>
        </div>
      </div>
    </>
  );
}
