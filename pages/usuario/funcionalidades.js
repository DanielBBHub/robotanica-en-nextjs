import Layout from "@/components/layout";
import funcionalidades from  "../../styles/funcionalidades.module.css"

export default function Funcionalidades(){
    return(<>

    <Layout funcionalidades> 
    <div className={`${funcionalidades.informacion_usuario} ${funcionalidades.centro}`}>

            <div className={funcionalidades.contenedor_izq}>

                <div className={funcionalidades.subcontenedor_izquierda}>
                <h2 className={funcionalidades.subtirulo} style={{paddingBottom: 2 + "em"}}>Movimiento manual</h2>
                    
                    <div className="fila_1">
                        <button className={`btn ${funcionalidades.botones_mover}`} id="moverDelante">
                            <img src="../../images/flecha.png" alt="Delante" className={funcionalidades.flecha_arriba}/>
                        </button>
                    </div>

                    <div className="fila_2">
                        <button className={`btn ${funcionalidades.botones_mover}`} id="moverDerecha" >
                            <img src="../../images/flecha.png" alt="Derecha" className={funcionalidades.flecha_derecha}/>
                        </button>
                        <button className={`btn ${funcionalidades.botones_mover}`} id="moverIzquierda">
                            <img src="../../images/flecha.png" alt="Izquierda" className={funcionalidades.flecha_izquierda}/>
                        </button>
                    </div>

                    <div className="fila_3">
                        <button className={`btn ${funcionalidades.botones_mover}`} id="moverAtras">
                            <img src="../../images/flecha.png" alt="Atras" className={funcionalidades.flecha_abajo}/>
                        </button>
                    </div>

                    <div className="fila_4"> 
                        <button className={`btn ${funcionalidades.botonCTA}`} id="parar" style={{width: 10 + "em"}}>Parar</button>
                    </div>
                    
                </div>
                <div className="h56 content-center">
                    <h2 className={funcionalidades.subtirulo} style={{paddingTop: 5 + "em"}}>Puntos de referencia</h2>
                    <div className="h-56 grid grid-cols-3 gap-4 content-evenly waypoints">
                        <button className="btn" id="navTomates">Tomate</button>
                        <button className="btn" id="waypoint_berenjena">Berenjenas</button>
                        <button className="btn" id="waypoint_tomate">Tomates</button>
                    </div>
                </div>
                

            </div> {/* <!--Fin contenedor izq--> */}

            <div className={`${funcionalidades.contenedor_der} h-56 grid grid-cols-1 gap-4 content-stretch`} >

                <div className={funcionalidades.contenedor_escaneo}>

                    <h2 className={funcionalidades.subtirulo} >Escaneo del entorno</h2>

                    <div className={`${funcionalidades.subcontenedor_derecha} flex items-center flex justify-around`}>

                        <div className={funcionalidades.escaneo}>
                        </div>
                        <button className={`btn ${funcionalidades.botonCTA}`} id="btn_escaneo">Escanear</button>
                    </div>
                </div>

                

                <div className={funcionalidades.contenedor_foto}>

                    <h2 className={funcionalidades.subtirulo} >Cámara</h2>

                    <div className={`${funcionalidades.subcontenedor_derecha} flex items-center flex justify-around`}>

                        <div className={funcionalidades.camara}>
                        </div>
                        <button className={`btn ${funcionalidades.botonCTA}`} id="btn_foto">Tomar foto</button>
                    </div>
                    
                </div>

            </div>{/* <!--Fin contenedor der--> */}
      
        </div>

    </Layout>
    </>)
}