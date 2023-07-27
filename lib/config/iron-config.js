
/* Se declaran unas opciones para el manejador de sesiones iron-session */
export const ironOptions = {
    cookieName: "COOKIE_PARA_LOGIN",
    password: process.env.COOKIE_PASS,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production" ? true: false,
  },
}
