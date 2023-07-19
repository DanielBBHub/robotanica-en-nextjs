//Importando la libreria del motor de busqueda de BD
import { PrismaClient } from "@prisma/client"

//Instanciando un objeto prisma para la conexion
const prisma = new PrismaClient()

export const config = {
    //runtime: 'edge',
}

export default async function handler(req, res)
{
    console.log("Accedido API")
    if(req.method == "POST")
    {
        //Se recogen los parametros del formulario de inicio de sesion desde el
        //cuerpo de la peticion HTTP
        const dniUsuario = req.body["dniUsuarioL"]
        //Por algun motivo es necesario cambiar una coma que aparece al final del valor
        //recogido del input para la pass
        //TODO: mirar por que ocurre esto
        const passUsuario = String(req.body["password"]).replace(",", "")
        
        
    }
}