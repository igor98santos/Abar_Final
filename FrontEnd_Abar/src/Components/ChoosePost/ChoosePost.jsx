import { Link } from 'react-router-dom'
import './ChoosePost.css'
export default function ChoosePost() {
  return ( 
  <>
           

                <div class="bg roundedX p-3 status shadow mt-3 mb-3">
                    <hr />


                    <form>
                        <div class="form-group d-flex flex-column flex-md-row">
                         
                            <input class="form-control flex-fill d-inline-block p-3 rounded mb-3" type="text" id="status-pub" Width="20%"
                                placeholder="What's up?"></input>
                           <Link to={"/createpub"}> <button type="button" id="btn1" class=" btn-cor rounded-left d-inline-block btnResquest">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="currentColor"
                                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg>
                                        
                                </button></Link>
                                <Link to={"/createpub"}>
                            <button type="button" class="btn-cor btnResquest rounded-right d-inline-block" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="currentColor"
                                    class="bi bi-image-fill ms-2" viewBox="0 0 16 16">
                                    <path
                                        d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                </svg>
                            </button></Link>

                        </div>
                    </form>


                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Escolha uma foto</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <input type="file" id="flImage" name="fimage" accept="image/*"/>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="button" class="btn btn-cor" data-bs-dismiss="modal"
                                    id="publica">Publicar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="UpdateModal" tabindex="-1" aria-labelledby="UpdateModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <p class="modal-title" id="UpdateModalLabel">Edite seu perfil</p>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">


                                <form>
                                    <label class="m-auto">Nome de usario:</label><br/>


                                    <input type="text" name="fname" placeholder="o nome que sera exibido" id="name"/><br/>
                                    <button type="button" class="btn-cor-profile mt-2"
                                        onclick="updateProfileName()">Atualizar</button><br/>
                                    <label>Genero:</label><br/>
                                    <input type="text" placeholder="Genero" id="generoValor"/><br/>
                                    <button type="button" class="btn-cor-profile mt-2"
                                        onclick="updateProfileGenero()">Atualizar</button><br/>

                                    <label for="fname">Carta de apresentação</label><br/>
                                    <textarea type="text" value="biografia" id="bioText"></textarea><br/>
                                    <button type="button" class="btn-cor-profile"
                                        onclick="updateProfileBio()">Atualizar</button>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="submit" class="btn-cor-profile" data-bs-dismiss="modal"
                                    onclick="updateProfile()">Finalizar atualizações</button>
                            </div>
                        </div>
                    </div>
                </div>

  
  
  </>
  )
}
