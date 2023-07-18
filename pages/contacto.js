import Layout from "@/components/layout";
import contactanos from "../styles/contactanos.module.css"
export default function Contacto() 
{
    return (
      <Layout contacto>
        <section className="items-center">
          <div className={`${contactanos.titulo} ${contactanos.centro}`}>
            <h2>Contáctanos</h2>
          </div>

          <div
            className={`${contactanos.informacion_usuario} ${contactanos.centro}`}
          >
            <div className={contactanos.contenedor}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.8475289961248!2d-0.16831398799828082!3d38.99597604076291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61c2a3069621fd%3A0xdb8ad87b84df4b24!2sUPV%20Campus%20de%20Gand%C3%ADa%20-%20Escuela%20Polit%C3%A9cnica%20Superior!5e0!3m2!1ses!2ses!4v1683372393480!5m2!1ses!2ses"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              className={contactanos.contenedor}
              style={{ marginRight: 10 + "rem", width: 28 + "rem" }}
            >
              <h3 style={{ fontSize: "large", fontWeight: "bold" }}>Horario</h3>
              <p style={{ marginLeft: 2 + "rem" }}>
                08:00 - 14:00 de lunes a viernes
                <br />
                09:00 - 11:00 el sábado
              </p>
              <h3
                style={{
                  fontSize: "large",
                  fontWeight: "bold",
                  marginTop: 1 + "rem",
                }}
              >
                Teléfono
              </h3>
              <p style={{ marginLeft: 2 + "rem" }}>+34 664 537 070</p>
              <h3
                style={{
                  fontSize: "large",
                  fontWeight: "bold",
                  marginTop: 1 + "rem",
                }}
              >
                Envíanos un correo:
              </h3>
              <form
                action="https://formsubmit.co/correuinutil02@gmail.com"
                method="POST"
              >
                <div className="form-group" style={{ marginTop: 1 + "rem" }}>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value=""
                    placeholder="E-mail"
                    required
                  />
                </div>

                <div className="form-group" style={{ marginTop: 1 + "rem" }}>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Mensaje"
                  ></textarea>
                </div>
                <div style={{ marginLeft: 23 + "rem" }}>
                  <button
                    className="botonCTA btn"
                    style={{
                      backgroundColor: "#475d39",
                      color: "white",
                      borderRadius: 15 + "px",
                    }}
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
}