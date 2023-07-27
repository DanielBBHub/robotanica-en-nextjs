import Layout from "@/components/layout";
import perfil from "../../styles/perfil.module.css"
import estiloMenu from "../../styles/menu.module.css"
import Link from "next/link";
/* Importamos withSessionSsr para manejar la peticion de la info del usuario */
import { withSessionSsr } from '../../lib/config/withSession';




export default function Perfil({usuario}) {
  return (
    <>
      <Layout perfil>
        <section className="landing" style={{background:"#FFFFFF",  height: 100 + "vh"}}>

          <div className={`${perfil.titulo} ${perfil.centro}`}>
            <h2>Perfil</h2>
          </div>

          <div className={`${perfil.informacion_usuario} ${perfil.centro}`}>
            <div className={perfil.contenedor} style={{marginright: 10 + "rem"}}>
              <img
                id="imgUsuario"
                className={perfil.imgUsuario}
                style={{margin: "auto"}}
                src={usuario.imagen}
              />
              <br />
              <br />
              <h4 className={perfil.camposPerfil} style={{margin: "auto"}}>
                Nombre completo:{usuario.nombre}
              </h4>
              <h4 id="nombreUsuarioTxt" className={estiloMenu.texto}></h4>
            </div>
            <div className={perfil.contenedor} style={{marginright: 10 + "rem"}}>
              <h3 className={perfil.camposPerfil} style={{margin: "auto"}}>
                Correo electrónico:{usuario.correo}
              </h3>
              <h4 id="correoUsuarioTxt" className={estiloMenu.texto}></h4>
              <br />
              <br />
              <h3 className={perfil.camposPerfil} style={{margin: "auto"}}>
                DNI del usuario: {usuario.dni}
              </h3>
              <h4 id="dniUsuarioTxt" className={estiloMenu.texto}></h4>
              <Link href="/usuario/editar_perfil">
                <button className="btn botonCTA">EDITAR PERFIL</button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

/* Creamos una peticion para recoger la informacion de sesion del usuario en el servidor */
export const getServerSideProps = withSessionSsr(
  async ({req, res}) => {
      const usuario = req.session.user;

      if(!usuario) {
          return {
              notFound: true,
          }
      }
      console.log(usuario)
      return {
          props: { usuario }
      }
  }
); 