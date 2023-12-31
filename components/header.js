import estiloMenu from "../styles/menu.module.css"
import Link from "next/link";


export default function Header({ index, informacion, contacto, acercade, login}){
    return (
      <>
        <header style={{ position: "fixed", width: 100 + "%", zindex: 1 }}>
          {/* Para migrar los estilos propios combinados con el codigo de Tailwind se utiliza la siguiente sintaxis:
                     className={`${styleModule.ownStyle} [Codigo Tailwind]`}*/}
          <nav className={`${estiloMenu.negro} flex h-16`}>
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
                </div>
              </div>
            </div>

            <div className={estiloMenu.login_header}>
              <Link href="/entrar/login">
                <img src="/images/persona.png" />
              </Link>
            </div>
          </nav>
        </header>
      </>
    );
}