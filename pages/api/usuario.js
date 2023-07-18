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