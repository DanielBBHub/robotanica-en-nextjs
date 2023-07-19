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
        console.log("Usuario " + req.body["dniUsuarioL"])
        console.log("Pass " + req.body["password"])
        const allUsers = await prisma.usuarios.findMany()
        console.log(allUsers)
    }
}