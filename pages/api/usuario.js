//Importando la libreria del motor de busqueda de BD
import { PrismaClient } from "@prisma/client"

//Instanciando un objeto prisma para la conexion
const prisma = new PrismaClient()

export const config = {
    //runtime: 'edge',
}

export default function handler(req, res)
{
    console.log("Accedido API")
    if(req.method == "POST")
    {
        console.log("Usuario " + req.body["dniUsuarioL"])
        console.log("Pass " + req.body["password"])
        res.status(200).json({ text: "Hola" });
    }
}