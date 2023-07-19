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
        const passUsuario = req.body["password"]
        console.log("Usuario " + req.body["dniUsuarioL"])
        console.log("Pass " + req.body["password"])

        try{
            //Peticion para encontrar un registro unico en la DB de manera asincrona
            const usuarioEntrando = await prisma.usuarios.findUnique({
                //Condicion dni == dniUsuario
                where:
                {
                    dni: dniUsuario
                }
            })
            //Comparacion de la contraseña introducida y de la recibida de la DB
            console.log(usuarioEntrando.pass.localeCompare(passUsuario) == 0)
            if(usuarioEntrando.pass.localeCompare(passUsuario) == 0){
                res.status(200).send({"usuario": usuarioEntrando})
            }else{
                res.status(404).send("DNI o contraseña equivocadas")
            }
            
        }catch(err){
            res.status(500).send(err)
        }
        
        
    }
}