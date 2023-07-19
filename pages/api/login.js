//Importando la libreria del motor de busqueda de BD
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

//Instanciando un objeto prisma para la conexion
const prisma = new PrismaClient();

export const config = {
  //runtime: 'edge',
};

/* req.body {
    dniUsuarioL: [int]
    password: String
    } ------------>

    handler() ------------>

    Redireccion Perfil / mensaje de error
*/
export default async function handler(req, res) {
  console.log("Accedido API");
  if (req.method == "POST") {
    //Se recogen los parametros del formulario de inicio de sesion desde el
    //cuerpo de la peticion HTTP
    const dniUsuario = req.body["dniUsuarioL"];
    //Por algun motivo es necesario cambiar una coma que aparece al final del valor
    //recogido del input para la pass
    //TODO: mirar por que ocurre esto
    const passUsuario = String(req.body["password"]).replace(",", "");

    try {
      //Peticion para encontrar un registro unico en la DB de manera asincrona
      const usuarioEntrando = await prisma.usuarios.findUnique({
        //Condicion dni == dniUsuario
        //          pass == passUsuario
        where: {
          dni: dniUsuario,
          pass: passUsuario,
        },
      });
      //Comparacion de la contraseña introducida y de la recibida de la DB
      console.log(usuarioEntrando);
      if (usuarioEntrando == null) {
        //Utilizo redirect() para rediriguir al usuario a la misma página
        //despues de comprobar que no existe
        res.redirect("/entrar/login?msg=login-incorrecto");
        return;
      } else {
        res.redirect("/usuario/perfil");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
