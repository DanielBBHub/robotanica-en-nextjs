import Layout from "@/components/layout";
import login from "../../styles/login.module.css"
import { useRouter } from 'next/router'

function toggle(){
  var toggle = document.getElementById('container');
  var res = document.getElementById('res');
  var ini = document.getElementById('ini');
  var login = document.getElementById('login');
  var registro = document.getElementById('registro');

  ini.classList.toggle("active");
  res.classList.toggle("active");

  if(toggle.classList.toggle("active")){
      document.getElementById("ff").style.display = "block";
      document.getElementById("aa").style.display = "none";
      login.disabled = true;
      registro.disabled = false;
  }
  else{
      document.getElementById("aa").style.display = "block";
      document.getElementById("ff").style.display = "none";
      registro.disabled = true;
      login.disabled = false;
  } 
}

export default function Login()
{
  //Se instancia un objeto router con las siguientes propiedades: https://nextjs.org/docs/pages/api-reference/functions/use-router#router-object
  //Lo utilizo para comprobar si hay una query en la url, en caso de que la autenticacion haya sido erronea
  const router = useRouter()
  //Se recoge el objeto "query" con el que comprobaremos si ha intentado entrar sin exito el usuario (por defecto es: {})
  const {msg} = router.query
  //Mensaje a mostrar en caso de que sea invalida la informacion de inicio de sesion
  const error = "DNI o contraseña invalidos"

    return (
      <>
      <title>Entrar</title>
        <Layout login>
          <br></br>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className={`form-control ${login.centrar}`}>
              <div className={login.cambio2}>
                <div id="ini" className={login.cambio3}>
                  <p>Iniciar sesión</p>
                </div>
                <div id="res" className={login.cambio3}>
                  <p>Registro</p>
                </div>
              </div>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className={`form-control ${login.centrar}`}>
                <label id="container" className="cursor-pointer label">
                  <input
                    onClick={toggle}
                    id="toggler"
                    type="checkbox"
                    className="toggle"
                  />
                </label>
              </div>
            </div>

            {/*     <!--------------------------------- INICIO DE SESIÓN ------------------------------------->
             */}
            <div className={login.centrar} id="aa">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2
                  className={`mt-5 text-center leading-9 tracking-tight ${login.registro}`}
                >
                  INICIA SESIÓN CON TU CUENTA
                </h2>
              </div>
              <form
                action="/api/login"
                method="POST"
                className="mt-5 sm:mx-auto sm:max-w-sm"
                noValidate
              >
                <div>
                  <label
                    htmlFor="dniUsuarioL"
                    className={`${login.textos} block leading-6`}
                  >
                    DNI:
                  </label>
                  <div className="mt-2">
                    <input
                      id="dniUsuarioL"
                      name="dniUsuarioL"
                      type="text"
                      required
                      className={`${login.textos_imput} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:leading-6`}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="passUsuario"
                      className={`${login.textos} block leading-6`}
                    >
                      Contraseña:
                    </label>
                    <div className="text-sm">
                      <label
                        htmlFor="my-modal-3"
                        className={`${login.textos} font-semibold hover:drop-shadow-xl cursor`}
                      >
                        ¿Has olvidado tu contraseña?
                      </label>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="passUsuario"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className={`${login.textos_imput} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:leading-6`}
                    />
                  </div>
                </div>
                <br />
                {/* Se comprueba que haya habido un login incorrecto, si es el caso se lanza el mensaje de error */}
                { msg  ? (<h4 className={login.textrojo} id="verificar">{error}</h4>) : (<></>)}
                
                <div>
                  <input
                    id="login"
                    type="submit"
                    value="ENVIAR"
                    className={`${login.botones} ${login.botones2} bg-lime-800 hover:bg-lime-900 hover:drop-shadow-xl w-4em rounded-md px-3 py-1.5 leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                  />
                </div>

                {/* <!-- Poner un input para el correo --> */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"
                      style={{ cursor: "pointer" }}
                      className="btn-sm absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">Cambio de contraseña</h3>
                    <p className="py-4">
                      Introduce tu correo electrónico y te enviaremos un mensaje
                      de confirmación.
                    </p>
                    <input
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className={`${login.textos_imput} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:leading-6`}
                    />
                    <div>
                      <br />
                      <button
                        className={`${login.botones} ${login.botones2} bg-lime-800 hover:bg-lime-900 hover:drop-shadow-xl w-4em rounded-md px-3 py-1.5 leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                      >
                        ENVIAR
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* <!---------------------------------------------------------------------------------------->

    <!----------------------------------------- REGISTRO -------------------------------------> */}
            <div id="ff" className="">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2
                  className={`${login.registro} mt-5 text-center leading-9 tracking-tight`}
                >
                  CREA UNA NUEVA CUENTA
                </h2>
              </div>

              <div className={login.borde}>
                <div className="flex justify-around">
                  <div className={login.ee}>
                    <h4 className={login.subregistro}>Datos personales</h4>
                    <div>
                      <label
                        htmlFor="nombreUsuario"
                        className={`${login.textos} block leading-6`}
                      >
                        Nombre:
                      </label>
                      <div className="mt-2">
                        <input
                          id="nombreUsuario"
                          name="nombre"
                          type="text"
                          required
                          className={`${login.textos_imput} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:leading-6`}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="apellidosUsuario"
                        className={`${login.textos} block leading-6`}
                      >
                        Apellidos:
                      </label>
                      <div className="mt-2">
                        <input
                          id="apellidosUsuario"
                          name="apellidos"
                          type="text"
                          required
                          className={`${login.textos_imput} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:leading-6`}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="dniUsuario"
                        className={`${login.textos} block leading-6`}
                      >
                        DNI:
                      </label>
                      <div className="mt-2">
                        <input
                          id="dniUsuario"
                          name="DNI"
                          type="text"
                          required
                          className={`${login.textos_imput} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:leading-6`}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="telefonoUsuario"
                        className={`${login.textos} block leading-6`}
                      >
                        Teléfono:
                      </label>
                      <div className="mt-2">
                        <input
                          id="telefonoUsuario"
                          name="telefono"
                          type="text"
                          required
                          className={`${login.textos_imput} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:leading-6`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={login.margen}></div>
                  <div className={login.ee}>
                    <h4 className={login.subregistro}>Detalles de la cuenta</h4>
                    <div>
                      <label
                        htmlFor="correoUsuario"
                        className={`${login.textos} block leading-6`}
                      >
                        Email:
                      </label>
                      <div className="mt-2">
                        <input
                          id="correoUsuario"
                          name="correo"
                          type="email"
                          required
                          className={`${login.textos_imput} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:leading-6`}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="passwordUsuario"
                        className={`${login.textos} block leading-6`}
                      >
                        Contraseña:
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="passwordUsuario"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className={`${login.textos_imput} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:leading-6`}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="passwordUsuarioRe"
                        className={`${login.textos} block leading-6`}
                      >
                        Repite la contraseña:
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="passwordUsuarioRe"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className={`${login.textos_imput} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:leading-6`}
                      />
                    </div>
                    <h4 className={login.textrojo} id="error"></h4>

                    <div
                      id="check"
                      className="form-control centrar condiciones"
                    >
                      <label className="label cursor-pointer">
                        <input
                          type="checkbox"
                          id="checkbox"
                          className={login.checkbox}
                        />
                        <a href="" className={login.terminos}>
                          Términos y condiciones| Política de privacidad
                        </a>
                      </label>
                    </div>

                    <div className="items-center">
                      <button
                        id="registro"
                        className={`${login.botones} ${login.botones2} bg-lime-800 hover:bg-lime-900 hover:drop-shadow-xl w-4em rounded-md px-3 py-1.5 leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                      >
                        ENVIAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
}