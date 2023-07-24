import Layout from "@/components/layout";
import perfil from "../../styles/perfil.module.css"
import estiloMenu from "../../styles/menu.module.css"
import Link from "next/link";

export default function Perfil() {
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
                src="../../images/usuario.png"
              />
              <br />
              <br />
              <h4 className={perfil.camposPerfil} style={{margin: "auto"}}>
                Nombre completo:{" "}
              </h4>
              <h4 id="nombreUsuarioTxt" className={estiloMenu.texto}></h4>
            </div>
            <div className={perfil.contenedor} style={{marginright: 10 + "rem"}}>
              <h3 className={perfil.camposPerfil} style={{margin: "auto"}}>
                Correo electrónico:{" "}
              </h3>
              <h4 id="correoUsuarioTxt" className={estiloMenu.texto}></h4>
              <br />
              <br />
              <h3 className={perfil.camposPerfil} style={{margin: "auto"}}>
                Fecha de creación:{" "}
              </h3>
              <h4 id="fechaUsuarioTxt" className={estiloMenu.texto}></h4>
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
