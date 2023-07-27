
/* Se importan librerias de la instalada iron-session */
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "./iron-config";

/* Se declaran dos manejadores para cuando la peticion va por la API o cuando el renderizado se hace en el servidor */
export function withSessionRoute(handler) {
    return withIronSessionApiRoute(handler, ironOptions);
}

export function withSessionSsr(handler) {
    return withIronSessionSsr(handler, ironOptions);
}