import Navbar from "../Navbar/Navbar";

export default function Amigos(){
    return(
        <div>
        <Navbar></Navbar>
        <div className="text-center">

        <h1>LISTA DE AMIGOS</h1>
        </div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Foto</th>
      <th scope="col">Nome</th>
      <th scope="col">Status</th>
      <th scope="col">Outra Rede</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img width={50} height={50} src={"https://media-exp1.licdn.com/dms/image/C5603AQG3QtgseUmr-Q/profile-displayphoto-shrink_800_800/0/1647039555605?e=1653523200&v=beta&t=3Mzca-Cb9YpLjMonLGQc10on9roFHQno2pXPFLxYwpo"}></img></td>
      <td>Aldione</td>
      <td>Animada</td>
      <td><a className="btn" href="https://www.linkedin.com/in/aldione-dias/">Linkedin</a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td colspan="2">Larry the Bird</td>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>

    <tr>
      <th scope="row">5</th>
      <td colspan="2">Larry the Bird</td>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>

    <tr>
      <th scope="row">6</th>
      <td colspan="2">Larry the Bird</td>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
  </tbody>
</table>

        </div>
    )
}