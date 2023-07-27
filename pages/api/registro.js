//Importando la libreria del motor de busqueda de BD
import { PrismaClient } from "@prisma/client";

//Instanciando un objeto prisma para la conexion
const prisma = new PrismaClient();

export const config = {
  //runtime: 'edge',
};

export default async function handler(req, res) {
  console.log("Accedido API registro");
  if (req.method == "POST") {
    console.log("nombreUsuario: " + String(req.body["nombreUsuario"]));
    console.log("apellidosUsuario: " + String(req.body["apellidosUsuario"]));
    console.log("correoUsuario: " + String(req.body["correoUsuario"]));
    console.log("passwordUsuario: " + String(req.body["passwordUsuario"]));
    console.log("passwordUsuarioRe: " + String(req.body["passwordUsuarioRe"]));
    //Se recogen los parametros del formulario de inicio de sesion desde el
    //cuerpo de la peticion HTTP
    const nombreUsuario = String(req.body["nombreUsuario"]);
    const apellidosUsuario = String(req.body["apellidosUsuario"]);
    const nombreApellidos = nombreUsuario + " " + apellidosUsuario;
    const dniUsuario = String(req.body["dniUsuario"]);
    const telefonoUsuario = Number(req.body["telefonoUsuario"]);
    const correoUsuario = String(req.body["correoUsuario"]);
    const passUsuario = String(req.body["passwordUsuario"]);
    const passwordUsuarioRe = String(req.body["passwordUsuarioRe"]);

    if (passUsuario == passwordUsuarioRe) {
      try {
        const user = await prisma.usuarios
          .create({
            data:{
              nombreApellidos: nombreApellidos,
              correo: correoUsuario,
              telefono: telefonoUsuario,
              pass: passUsuario,
              dni: dniUsuario,
              token: null,
              verify: 0,
              imagen: "",
            }
          })
          .then(async () => {
            await prisma.$disconnect();
          })
          .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
          });
       
        console.log("Usuario registrado: " + String(user))
        res.status(200).send(user)
        
      } catch (err) {
        res.status(500).send(err);
      }
    } else {
      res.redirect("/entrar/login?msg=contrasenyas-no-coincidentes");
    }
  }
}
