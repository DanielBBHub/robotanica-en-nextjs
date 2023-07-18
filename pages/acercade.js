import Head from "next/head";
import acercade from  "../styles/acercade.module.css"
import estilos from "../styles/style.module.css"
import Link from "next/link";
import Layout from "@/components/layout";


export default function Acercade() 
{
    return (
      <>
      <Layout acercade>
        <body>
          <div id="top"></div>
          <section className="LandingPage" id="inicio">
            <div className="acercade">
              <h4 className={estilos.titulo}>MIEMBROS DEL GRUPO</h4>
              <h4 className={acercade.subtirulo}>Programadores Back-end</h4>

              <div className="flex items-center justify-around items-center pt-10">
                <div className={`${estilos.tarjeta} card w-80`}>
                  <div className={`${estilos.front} ${estilos.duo}`}>
                    <figure>
                      <img src="/images/hombre.svg" className={acercade.imagenes} />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className={`card-title ${estilos.titulo_card}`}>
                        Daniel Benavides Belmonte
                      </h2>
                      <p className={estilos.texto_card}>Diseñadora Web.</p>
                    </div>
                  </div>

                  <div className={`${estilos.back} ${estilos.duo}`}>
                    <div className="card-body items-center text-center">
                      <h2 className={acercade.titulo_card_atras}>
                        Daniel Benavides Belmonte
                      </h2>
                      <p className={acercade.texto_card}>
                        Basicamente, lo arreglo todo. <br />
                        Además del desarollo del back-end del servidor, como
                        scrum master me encargo de que todos trabajemos lo mejor
                        posible. Pero mi trabajo diario es poner la música, un
                        poquito para ambientar.
                      </p>
                      <div className="flex items-center justify-around">
                        <a href="">
                          <svg
                            className={acercade.logos}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                            />
                          </svg>
                        </a>
                        <a href="">
                          <svg
                            className={acercade.logos}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                            />
                          </svg>
                        </a>
                        <a href="https://github.com/DanielBBHub">
                          <svg
                            className={acercade.logos}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${estilos.tarjeta} card w-80`}>
                  <div className={`${estilos.front} ${estilos.duo}`}>
                    <figure>
                      <img src="/images/hombre2.svg" className={acercade.imagenes} />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className={`card-title ${estilos.titulo_card}`}>
                        Carlos Ipiens Quintanar
                      </h2>
                      <p className={estilos.texto_card}>Diseñadora Web.</p>
                    </div>
                  </div>

                  <div className={`${estilos.back} ${estilos.duo}`}>
                    <div className="card-body items-center text-center">
                      <h2 className={acercade.titulo_card_atras}>
                        Carlos Ipiens Quintanar
                      </h2>
                      <p className={estilos.texto_card}>
                        Como desarrollador de back-end me encargo, junto a Dani
                        de hacer viable el servidor. Como nos gusta mucho
                        comunicarnos, nos encargamos de comunicar la web con el
                        robot. Pero mi principal tarea es hacer las comidas en
                        las reuniones.
                      </p>
                      <div className="flex items-center justify-around">
                        <a href="https://www.linkedin.com/in/carlos-ipi%C3%A9ns-quintanar-509252210/">
                          <svg
                            className={acercade.logos}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                            />
                          </svg>
                        </a>
                        <a href="">
                          <svg
                            className={acercade.logos}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                            />
                          </svg>
                        </a>
                        <a href="https://github.com/cipiqui">
                          <svg
                            className={acercade.logos}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${estilos.tarjeta} card w-80`}>
                  <div className={`${estilos.front} ${estilos.duo}`}>
                    <figure>
                      <img src="images/hombre.svg" className={acercade.imagenes} />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className={`card-title ${estilos.titulo_card}`}>Rubén Marin Samper</h2>
                      <p className={estilos.texto_card}>Diseñadora Web.</p>
                    </div>
                  </div>

                  <div className={`${estilos.back} ${estilos.duo}`}>
                    <div className="card-body items-center text-center">
                      <h2 className={acercade.titulo_card_atras}>
                        Rubén Marin Samper
                      </h2>
                      <p className={estilos.texto_card}>
                        Basicamente me encargo de intentar que el robot funcione
                        para así poder recoger la mayor cantidad de datos,
                        aunque a veces para conseguirlo hace falta pegarnos con
                        él. Aunque en verdad, las papas son mi pasión.
                      </p>
                      <div className="flex items-center justify-around">
                        <a href="">
                          <svg
                            className={acercade.logos}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                            />
                          </svg>
                        </a>
                        <a href="">
                          <svg
                            className={acercade.logos}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                            />
                          </svg>
                        </a>
                        <a href="https://github.com/ruben021000">
                          <svg
                            className={acercade.logos}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className={estilos.linea}></div>
            <h4 className={acercade.subtirulo}>Programadores Front-End</h4>

            <div className="flex items-center justify-around items-center pt-10">
              <div className={`${estilos.tarjeta} card w-80`}>
                <div className={`${estilos.front} ${estilos.duo}`}>
                  <figure>
                    <img src="/images/mujer.svg" className={acercade.imagenes} />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className={`card-title ${estilos.titulo_card}`}>Alba Oliver Navarro</h2>
                    <p className={estilos.texto_card}>Diseñadora Web.</p>
                  </div>
                </div>

                <div className={`${estilos.back} ${estilos.duo}`}>
                  <div className="card-body items-center text-center">
                    <h2 className={acercade.titulo_card_atras}>
                      Alba Oliver Navarro
                    </h2>
                    <p className={estilos.texto_card}>
                      Soy la diseñadora web de la StartUp Robotánica. Mi
                      principal trabajo es hacer que veas la información que te
                      interesa de la manera más bonita y comoda. Además, preparo
                      el café de las reuniones.
                    </p>
                    <div className="flex items-center justify-around">
                      <a href="https://www.linkedin.com/in/alba-oliver-navarro-841819211/">
                        <svg
                          className={acercade.logos}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                          />
                        </svg>
                      </a>
                      <a href="">
                        <svg
                          className={acercade.logos}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                          />
                        </svg>
                      </a>
                      <a href="https://github.com/aolinav">
                        <svg
                          className={acercade.logos}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${estilos.tarjeta} card w-80`}>
                <div className={`${estilos.front} ${estilos.duo}`}>
                  <figure>
                    <img src="/images/hombre.svg" className={acercade.imagenes} />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className={`card-title ${estilos.titulo_card}`}>Joan Costa Escriva</h2>
                    <p className={estilos.texto_card}>Diseñadora Web.</p>
                  </div>
                </div>

                <div className={`${estilos.back} ${estilos.duo}`}>
                  <div className="card-body items-center text-center">
                    <h2 className={acercade.titulo_card_atras}>Joan Costa Escriva</h2>
                    <p className={estilos.texto_card}>
                      Si lo puedes pensar, puedo crearlo. Mi trabajo principal
                      es el desarrollo de la app, para que puedas tener toda la
                      información que quieras. Me encanta android, a ratos.
                      Sobre todo yo propongo las comidas después de las
                      reuniones.
                    </p>
                    <div className="flex items-center justify-around">
                      <a href="https://www.linkedin.com/in/joancostaescriva/">
                        <svg
                          className={acercade.logos}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                          />
                        </svg>
                      </a>
                      <a href="">
                        <svg
                          className={acercade.logos}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                          />
                        </svg>
                      </a>
                      <a href="https://github.com/Joacoses">
                        <svg
                          className={acercade.logos}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={estilos.linea}></div>

            <div className="flex justify-center pt-3">
              <img className={estilos.imagen} src="/images/rr.jpg"/>
              <div className={acercade.contenedor}>
                <h4 className={acercade.subtirulo}>Sobre Nosotros</h4>
                <p className={acercade.texto}>
                  Hola, buenas. <br />
                  Somos los creadores de Robotánica, un grupo de estudiantes
                  entusiasmados por la programación, nos gusta desarrollar para
                  aportar soluciones innovadoras a todo tipo de sectores.
                  <br />
                  Apostamos esta vez con Robotánica por la unión de la
                  tecnología y la agricultura pudiendo no solo así mejorar los
                  resultados sino también ayudar a realizar de una forma más
                  cómoda y rápida tareas que hasta el momento habían resultado
                  complejas.
                </p>
              </div>
            </div>
            <br />
            <br />
          </section>
        </body>
        </Layout>
      </>
    );
}