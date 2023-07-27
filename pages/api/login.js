//Importando la libreria del motor de busqueda de BD
import { PrismaClient } from "@prisma/client";

//Instanciando un objeto prisma para la conexion
const prisma = new PrismaClient();

export const config = {
  //runtime: 'edge',
};

import { withSessionRoute } from "../../lib/config/withSession";

/* req.body {
    dniUsuarioL: [int]
    password: String
    } ------------>

    handler() ------------>

    Redireccion Perfil / mensaje de error
*/

/* Importamos la funcionalidad de Routing del archivo withSession.js 
y le pasamos como parametro el manejador del login */
export default withSessionRoute(handler);


async function handler(req, res) {
  console.log("Accedido API login");
  if (req.method == "POST") {
    //Se recogen los parametros del formulario de inicio de sesion desde el
    //cuerpo de la peticion HTTP
    const dniUsuario = req.body["dniUsuarioL"]
    console.log(dniUsuario)
    //Por algun motivo es necesario cambiar una coma que aparece al final del valor
    //recogido del input para la pass
    //TODO: mirar por que ocurre esto
    const passUsuario = req.body["password"][0];
    console.log(passUsuario)
    try {
      //Peticion para encontrar un registro unico en la DB de manera asincrona
      const usuarioEntrando = await prisma.usuarios.findUnique(
        {
          where:{
            dni: dniUsuario,
            pass: passUsuario,
          },
        }
        )
      //Comparacion de la contraseña introducida y de la recibida de la DB
     
      if (usuarioEntrando == null) {
        //Utilizo redirect() para rediriguir al usuario a la misma página
        //despues de comprobar que no existe
        await prisma.$disconnect()
        .then(
          res.redirect("/entrar/login?msg=login-incorrecto")
        );
        
        
      } else {
        //En caso de ser satisfactorio la autenticacion se guarda la informacion del usuario
        //en el objeto de sesion dentro de la peticion
        req.session.user = {
          nombre:usuarioEntrando.nombreApellidos,
          dni: dniUsuario,
          correo: usuarioEntrando.correo, 
          imagen: usuarioEntrando.imagen,
        };
        //Guardamos la informacion de session
        await req.session.save();

        await prisma.$disconnect()
        .then(
          res.redirect("/usuario/perfil")
        );
        
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
