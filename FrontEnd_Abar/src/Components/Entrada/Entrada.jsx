import React from "react";
import logoMarca from "../../assets/img/Abar_logomarca_2.jpg";
import "./Entrada.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Entrada() {
  return (
    <>
      <section id="title">
        <div className="container-fluid">
          <Navbar className="navbar" variant="dark" expand="lg">
            <Container>
              <img
                className="navbarbrand"
                href=""
                src={logoMarca}
                alt=""
                height="170"
              />
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="ms-auto">
                  <Nav.Link className="nav-link" href="#contato">
                    Contato
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="#objetivo">
                    Objetivo
                  </Nav.Link>

                  <Nav.Link className="nav-link" href="#sobre">
                    Sobre o projeto
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="row ">
            <div className=" title col-lg-6">
              <h1>Faça verdadeiras amizades.</h1>
              <button
                type="button"
                className="btn btn-lg btn-primary conta-button"
              >
                <Link to="/Cadastro">
                  <a>Inscreva-se</a>
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-lg btn-outline-light conta-button"
              >
                <Link to="/Login">Entre em sua </Link>
              </button>
            </div>

            <div className=" title-img col-lg-6">
              <img
                className="destaque-img"
                src="https://cdn.pixabay.com/photo/2020/06/13/15/17/pride-5294585_960_720.png"
                alt="iphone-mockup"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="row">
          <div class=" features-grid col-lg-4">
            <i class="fas fa-bullseye fa-4x icons"></i>
            <h3 class="features-h3">Fácil e inclusivo.</h3>
            <p>Tão fácil de usar que você irá se surpreender.</p>
          </div>
          <div class="features-grid col-lg-4">
            <i class="fas fa-check-circle fa-4x icons"></i>
            <h3 class="features-h3">Seja livre para ser você</h3>
            <p>
              Faça reais amizades com quem se identifica sem segundas intenções.
            </p>
          </div>
          <div class="features-grid col-lg-4">
            <i class="fas fa-heart fa-4x icons"></i>
            <h3 class="features-h3">Garantia de acolhimento</h3>
            <p>
              Encontre-se na plataforma encontrando amizades além das
              fronteiras.
            </p>
          </div>
        </div>
      </section>

      <section id="sobre" className="col-sm-12">
        <div id="CustomerExamples" class="carousel slide" data-bs-ride="true">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h1>Você sabe o que significa Abar ?</h1>
              <div className="rounded ">
                <img className="bg-light mb-3 " src={logoMarca}></img>
              </div>
            </div>

            <div class="carousel-item">
              <h1>Significado</h1>
              <p className="paragrafo">
                "Abar" é o prefixo aproximado para palavras que significam
                amizade no tupi-guarani: Abaré, Abaruna, Ararê, Avaré.
              </p>
              <h4>Seja abar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart-fill corSvg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
</svg></h4>
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#CustomerExamples"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#CustomerExamples"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </section>

      <section id="objetivo" className="col-sm-12">
        <h2>Por que outra rede social ?</h2>
        <p>motivos.</p>

        <div className="row">
          <div className=" missao-card col-lg-4 col-md-6">
            <div className="card h-100">
              <div className="card-header">
                <h2>Problemas</h2>
              </div>
              <div className="card-body">
                <p>
                  Aplicativos gays se tornaram um espaço apenas para sexo
                  casual, não existindo um ambiente online focado no publico
                  LGBTQIA para namoro ou amizade. A pandemia de Sars-CoV-2
                  agravou a situação por pôr fim aos eventos de socialização
                  gay.
                </p>
              </div>
            </div>
          </div>

          <div className=" missao-card col-sm-12 col-lg-4 col-md-6">
            <div className="card h-100">
              <div className="card-header">
                <h2>Solução</h2>
              </div>
              <div className="card-body">
                <p>
                  A rede social Abar surge inspirada nas duas redes sociais de
                  notório sucesso no Brasil: Facebook e Orkut. Seu nome é um
                  prefixo para palavras que significam "amizade" no
                  tupi-guarani.
                </p>
              </div>
            </div>
          </div>

          <div className=" missao-card col-lg-4 col-md-12">
            <div className="card h-100">
              <div className="card-header">
                <h2>Como ?</h2>
              </div>
              <div className="card-body">
                <p>
                  Enquanto os apps gays funcionam com base em localização GPS,
                  para indicar apenas quem está mais próximo fisicamente, a Abar
                  exibe quem está mais próximo intelectualmente. Interesses em
                  comum para contatos e conversa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contatos">
        <h3 className="conf-h3">Idealizadores.</h3>
        <div className="container">
          <div className="row">
            {/* Aldione */}
            <div className=" col-xs-12 col-lg-2 col-md-4 mt-2">
              <img
                className="contato-img rounded-circle"
                src="https://media-exp1.licdn.com/dms/image/C5603AQG3QtgseUmr-Q/profile-displayphoto-shrink_800_800/0/1647039555605?e=1652918400&v=beta&t=BhOZIEQlCSKkQ3PL4LO7258TQcqYuinGzGbLa3Uvy10"
                alt="tc-logo"
              />
              {/* Aldione linkedin */}
              <div className="container">
                <a href="https://www.linkedin.com/in/aldione-dias/">
                  <i className="contatoIcon linked">
                    <svg
                      cl
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin ms-4 p-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </i>
                </a>
                {/* Aldione github */}

                <a href="https://github.com/AldioneDiasBarretoSouza?tab=repositories">
                  <i className="contatoIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github mx-1 p-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>

            {/* Eder */}
            <div className="col-xs-12 col-lg-2 col-md-4 mt-2">
              <img
                className="contato-img rounded-circle"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFXNfl8SuUNPg/profile-displayphoto-shrink_800_800/0/1614100206530?e=1652918400&v=beta&t=d4uxaEscySsAbZgiIT1vyMxiC1skEVfifFKuyc9pyEU"
                alt="tc-logo"
              />
              {/* Eder linkedin */}
              <div className="container">
                <a href="https://www.linkedin.com/in/eder-moura/">
                  <i className="contatoIcon linked">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin ms-4 p-1 linked"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </i>
                </a>
                {/*Eder github */}
                <a href="https://github.com/Drake-Montgomery">
                  <i className="contatoIcon ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github mx-1 p-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>

            {/* Elise */}
            <div className="col-xs-12 col-lg-2 col-md-4 mt-2">
              <img
                className="contato-img rounded-circle"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEFokk06NE4jA/profile-displayphoto-shrink_800_800/0/1647880780756?e=1653523200&v=beta&t=NAcXbHZfTjamNR4QV3LGhrwq1De51HPXm-u8DKmVbpE"
                alt="tc-logo"
              />
              {/* Elise linkedin */}
              <div className="container">
                <a href="https://www.linkedin.com/in/elise-medeiros-50b599234/">
                  <i className="contatoIcon linked">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin ms-4 p-1 linked"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </i>

                  {/*Elise github */}
                </a>
                <a href="https://github.com/Elise-16-medeiros">
                  <i className="contatoIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github mx-1 p-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
            {/* Igor */}
            <div className="col-xs-12 col-lg-2 col-md-4 mt-2">
              <img
                className="contato-img rounded-circle"
                src="https://media-exp1.licdn.com/dms/image/C5603AQEtrTYiKp9_Vw/profile-displayphoto-shrink_800_800/0/1620304176478?e=1652918400&v=beta&t=tdpuDZHNV-0lx59zuCm7qN_a3F0HlQCMT6xSt-bHvS0"
                alt="tc-logo"
              />
              <div className="container">
                {/* Igor linkedin */}
                <a href="https://www.linkedin.com/in/igor-pedro-79613a210/">
                  <i className="contatoIcon linked">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin ms-4 p-1 linked"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </i>
                </a>
                {/* Igor github */}
                <a href="https://github.com/igor98santos">
                  <i className="contatoIcon ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github mx-1 p-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>

            {/* Lucas */}
            <div className=" col-xs-12 col-lg-2 col-md-4 mt-2">
              <img
                className="contato-img rounded-circle"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGxuP84P0RXeA/profile-displayphoto-shrink_800_800/0/1647675723043?e=1652918400&v=beta&t=L4qaBtCIuNFW2_HDLE8FyAvM9hDsh4gv82dm_V0AgR4"
                alt="tc-logo"
              />
              <div className="container">
                {/* Lucas linkedin */}
                <a href="https://www.linkedin.com/in/lucas-gomes-dantas-de-almeida-93b459220/">
                  <i className="contatoIcon linked">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin ms-4 p-1 linked"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </i>
                </a>
                {/* Lucas github */}
                <a href="https://github.com/LucasAlmeid4">
                  <i className="contatoIcon ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github mx-1 p-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
            {/* Thales */}
            <div className="col-xs-12 col-md-4 col-lg-2  mt-2">
              <img
                className="contato-img rounded-circle"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEiUfQfMoMxGg/profile-displayphoto-shrink_800_800/0/1546606885795?e=1653523200&v=beta&t=k9CFOipq8trzgIxc1sS29togCukW5ezUikqDAByZlKw"
                alt="tc-logo"
              />
              {/* Thales linkedin */}
              <div className="container">
                <a href="https://www.linkedin.com/in/thales-soares-a34553b1/">
                  <i className="contatoIcon linked">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin ms-4 p-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </i>
                </a>
                {/* Thales github */}
                <a href="https://github.com/thales-ulisses">
                  <i className="contatoIcon ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github mx-1 p-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contato">
        <i className=" footer-icons fab fa-twitter"></i>
        <i className=" footer-icons fab fa-facebook-f"></i>
        <i className=" footer-icons fab fa-instagram"></i>
        <i className=" footer-icons fas fa-envelope"></i>
        <p className=" footer-icons footer-p">© Copyright 2022 Abar</p>
      </footer>
    </>
  );
}
