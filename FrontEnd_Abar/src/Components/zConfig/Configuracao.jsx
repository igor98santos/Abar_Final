import Navbar from "../Navbar/Navbar";
import './index.css'

export default function Configuracao(){
    return(
        <>
        <Navbar></Navbar>
        <div class="center">
        <form>
            <div class="form-group p-3">
                <label for="exampleInputEmail1">
                    <h1 class="display-6">Endereço de email</h1>
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Seu email"/>
                <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com
                    ninguém.</small>
            </div>

            <div class="botao">
                <button type="submit" value="Submit" class="btn btn-primary ms-3">Enviar</button>
                <button type="reset" value="Reset" class="btn btn-primary m-2">Editar</button>
            </div>

        </form>


        <form>
            <div class="form-group p-3">
                <label for="exampleInputPassword1">
                    <h1 class="display-6">Redefinir Senha</h1>
                </label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha Atual"/>
                <br/>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Nova Senha"/>
                <br/>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirmar Senha"/>
            </div>
            
            <div class="botao">
                <button type="reset" value="Reset" class="btn btn-primary ms-3">Redefinir Senha</button>
                <button type="submit" value="Submit" class="btn btn-primary m-2">Enviar</button>
            </div>
        </form>

        <div class=" p-3">
            <h1 class="display-6">Identidade de Gênero</h1>
            <select class="form-select" aria-label="Default select example">
                <option value="1">Cisgênero</option>
                <option value="2">Transgênero</option>
                <option value="3">Gênero Fluido</option>
                <option value="4">Não-binário</option>
                <option value="5">Intersexo</option>
            </select>

            <div class="botao">
                <button type="submit" value="Submit" class="btn btn-primary mt-2">Salvar</button>
            </div>
        </div>




        <div class=" p-3">
            <h1 class="display-6">Orientação Sexual</h1>
            <select class="form-select" aria-label="Default select example">
                <option value="1">Lésbica</option>
                <option value="2">Gay</option>
                <option value="3">Bissexual</option>
                <option value="4">Pansexual</option>
                <option value="5">Polissexual</option>
                <option value="6">Demisexual</option>
                <option value="7">Queer</option>
                <option value="8">Assexual</option>
                <option value="9">Arromântico</option>
                <option value="10">Outros...</option>
            </select>

            <div class="botao">
                <button type="submit" value="Submit" class="btn btn-primary mt-2">Salvar</button>
            </div>
        </div>
    </div>
    </>
    )
}