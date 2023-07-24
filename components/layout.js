import estiloMenu from "../styles/menu.module.css";
import estilos from "../styles/style.module.css";
import Link from "next/link";
import Footer from "./footer";
import Header from "./header";

export default function Layout({
  children,
  index,
  informacion,
  contacto,
  acercade,
  perfil,
  editarPerfil,
  funcionalidades
}) {
  return (
    <>
    
    
      {/* <Header /> */}
      <header style={{ position: "fixed", width: 100 + "%", zindex: 1, top: 0 }}>
        {/* Para migrar los estilos propios combinados con el codigo de Tailwind se utiliza la siguiente sintaxis:
                     className={`${styleModule.ownStyle} [Codigo Tailwind]`}*/}
        <nav className={`${estiloMenu.negro} flex h-16`} style={{ position: "fixed", width: 100 + "%", zindex: 1, top: 0 }}>
          <div className={estiloMenu.imagen_header}>
            <Link href="/">
              <img src="/images/Logo.png" />
            </Link>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-center items-center">
              <div className="ml-10 flex items-baseline space-x-4">
                {index ? (
                  <>
                  <title>Robotánica</title>
                    {" "}
                    <Link
                      href="/"
                      className={`${estiloMenu.menu1} text-white rounded-md px-3 py-2 text-sm font-medium`}
                      aria-current="page"
                    >
                      Inicio{" "}
                    </Link>
                    <Link
                      href="/informacion"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Información
                    </Link>
                    <Link
                      href="/contacto"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Contacto
                    </Link>
                    <Link
                      href="/acercade"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Acerca de
                    </Link>
                  </>
                ) : null}
                {informacion ? (
                  <>
                  <title>Información</title>
                    {" "}
                    <Link
                      href="/"
                      className={`${estiloMenu.menu2} text-white rounded-md px-3 py-2 text-sm font-medium`}
                      aria-current="page"
                    >
                      Inicio{" "}
                    </Link>
                    <Link
                      href="/informacion"
                      className={`${estiloMenu.menu1} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Información
                    </Link>
                    <Link
                      href="/contacto"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Contacto
                    </Link>
                    <Link
                      href="/acercade"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Acerca de
                    </Link>
                  </>
                ) : null}
                {contacto ? (
                  <>
                  <title>Contacto</title>
                    {" "}
                    <Link
                      href="/"
                      className={`${estiloMenu.menu2} text-white rounded-md px-3 py-2 text-sm font-medium`}
                      aria-current="page"
                    >
                      Inicio{" "}
                    </Link>
                    <Link
                      href="/informacion"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Información
                    </Link>
                    <Link
                      href="/contacto"
                      className={`${estiloMenu.menu1} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Contacto
                    </Link>
                    <Link
                      href="/acercade"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Acerca de
                    </Link>
                  </>
                ) : null}

                {acercade ? (
                  <>
                  <title>Acerca de...</title>
                    {" "}
                    <Link
                      href="/"
                      className={`${estiloMenu.menu2} text-white rounded-md px-3 py-2 text-sm font-medium`}
                      aria-current="page"
                    >
                      Inicio{" "}
                    </Link>
                    <Link
                      href="/informacion"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Información
                    </Link>
                    <Link
                      href="/contacto"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Contacto
                    </Link>
                    <Link
                      href="/acercade"
                      className={`${estiloMenu.menu1} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Acerca de
                    </Link>
                  </>
                ) : null}
                {perfil ? (
                  <>
                  <title>Perfil</title>
                    {" "}
                    <Link
                      href="/usuario/perfil"
                      className={`${estiloMenu.menu1} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Perfil
                    </Link>
                    <Link
                      href="/usuario/funcionalidades"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Funcionalidades
                    </Link>
                  </>
                ) : null}
                {editarPerfil ? (
                  <>
                  <title>Editar perfil</title>
                    {" "}
                    <Link
                      href="/usuario/perfil"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Perfil
                    </Link>
                    <Link
                      href="/usuario/funcionalidades"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Funcionalidades
                    </Link>
                  </>
                ) : null}
                {funcionalidades ? (
                  <>
                  <title>Funcionalidades</title>
                    {" "}
                    <Link
                      href="/usuario/perfil"
                      className={`${estiloMenu.menu2} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Perfil
                    </Link>
                    <Link
                      href="/usuario/funcionalidades"
                      className={`${estiloMenu.menu1} text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                    >
                      Funcionalidades
                    </Link>
                  </>
                ) : null}
              </div>
            </div>
          </div>

          {perfil ? (
            <div
              className="cerrar_sesion_header"
              style={{
                width: 2 + "rem",
                marginTop: 1 + "rem",
                marginRight: 3 + "rem",
              }}
            >
              <button id="logoutButton" type="button">
                <img src="../../images/cerrar-sesionblanco.png" />
              </button>
            </div>
          ) : (
            <div className={estiloMenu.login_header}>
              <Link href="/entrar/login">
                <img src="/images/persona.png" />
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* -----------------------------------------CONTENIDO DE LA PAGINA----------------------------------------------------- */}
      <main className={estiloMenu.body} style={{padding: 16 + "px"}}>{children}</main>
      {/* -----------------------------------------CONTENIDO DE LA PAGINA----------------------------------------------------- */}

      <Footer />
    </>
  );
}
