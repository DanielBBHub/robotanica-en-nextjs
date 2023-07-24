import Layout from "@/components/layout";
import editar from "../../styles/editar.module.css"
import estiloMenu from "../../styles/menu.module.css"

export default function EditarPerfil()
{
    return (
      <>
        <Layout editarPerfil>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            {/* <!------------------------------------ Editar Perfil ------------------------------->
             */}
            <div className={`${editar.centrar} ${editar.aa}`}>
              <div className={estiloMenu.contenedor}>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className={`mt-5 text-center leading-9 tracking-tight ${editar.registro}`}>
                    EDITAR PERFIL
                  </h2>
                </div>
                <div>
                  <div className={editar.profile_img}>
                    <img
                      className={editar.rojo}
                      src="../../images/usuario2.png"
                      id="imgUsuario"
                      alt="foto usuario"
                    />
                    <div className={`${editar.file} btn`}>
                      Cambiar foto
                      <input
                        type="file"
                        id="image-input"
                        accept="image/jpeg, image/png, image/jpg"
                        name="file"
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className="mt-5 sm:mx-auto sm:max-w-sm">
                  <div>
                    <label
                      htmlFor="cambiarNombreTXT"
                      className={`${editar.textos} block leading-6`}
                    >
                      Ingrese tu nuevo nombre:
                    </label>
                    <div className="mt-2">
                      <input
                        id="cambiarNombreTXT"
                        name="n"
                        type="text"
                        required
                        className={`${editar.textos_imput} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:leading-6`}
                      />
                    </div>
                  </div>
                  <br />
                  <div>
                    <label
                      for="cambiarCorreoTXT"
                      className="textos block leading-6"
                    >
                      Ingrese tu nuevo correo:
                    </label>
                    <div className="mt-2">
                      <input
                        id="cambiarCorreoTXT"
                        name="n"
                        type="text"
                        required
                        className={`${editar.textos_imput} block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:leading-6`}
                        />
                    </div>
                  </div>

                  <br />
                  <div className="text-sm">
                    <label
                      for="my-modal-3"
                      className={`${editar.textos} ${editar.contra} font-semibold hover:drop-shadow-xl ${editar.cursor}`}
                    >
                      ¿Has olvidado tu contraseña? ¿Quieres cambiarla?
                    </label>
                  </div>

                  <div>
                    <button
                      id="editarPerfilBoton"
                      className={`${editar.botones} ${editar.botones2} bg-lime-800 hover:bg-lime-900 hover:drop-shadow-xl w-4em rounded-md px-3 py-1.5 leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                    >
                      <label htmlFor="my-modal-1">GUARDAR CAMBIOS</label>
                    </button>
                  </div>
                  <br />

                  <input
                    type="checkbox"
                    id="my-modal-1"
                    className="modal-toggle"
                  />
                  <div className={editar.modal}>
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-1"
                        style={{cursor: "pointer"}}
                        className="btn-sm absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <p className="py-4">
                        La información ha sido guardada correctamente.
                      </p>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className={editar.modal}>
                    <div className="modal-box relative">
                      <label
                        for="my-modal-3"
                        style={{cursor: "pointer"}}
                        className="btn-sm absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <p className="py-4">
                        Revise el correo para restablecer su contraseña.
                      </p>
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