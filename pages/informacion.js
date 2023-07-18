import Layout from "@/components/layout";
import estiloMenu from "../styles/menu.module.css"
import informacion from "../styles/informacion.module.css"
import estilos from "../styles/style.module.css"

export default function Informacion() 
{
    return (<Layout informacion>
    <div>
   <h2 class={informacion.titulo}>INFORMACIÓN ADICIONAL</h2>

    <div class={informacion.linea}></div>

    <div class="flex justify-center pt-3">
        <img class={informacion.imagen} src="/images/rr.jpg" alt=""/>
        <div class={estiloMenu.contenedor}>
            <h4 class={informacion.subtitulo}>Beneficios en la Agricultura</h4>
            <p class={informacion.texto}>
                Los robots en la agricultura son máquinas inteligentes que pueden realizar diversas tareas relacionadas con el cultivo, el cuidado y la cosecha de los alimentos.
                Además, son una solución innovadora para impulsar la agricultura de precisión, que busca maximizar la productividad y la sostenibilidad del sector agrícola. Los robots en la agricultura son el futuro de la agricultura que ya está aquí.</p>
        </div>
    </div>

    <div class={estiloMenu.linea}></div>

    <div class="flex justify-center pt-3">
        <div class={informacion.contenedor}>
            <h4 class={informacion.subtitulo}>Tecnologías utilizadas</h4>
            <p class={informacion.texto}>
                El objetivo del proyecto es demostrar las posibilidades de la robótica web, que combina las ventajas de la robótica y la web para crear aplicaciones interactivas y accesibles para el control y la observación de robots.
                El proyecto consiste en el desarrollo de una aplicación web para controlar y monitorizar un robot móvil. Para ello, se han utilizado las siguientes tecnologías:
                </p>
        </div>
        <img class={informacion.imagen} src="/images/ee.jpeg" alt=""/>
    </div>

    <div class="flex items-center justify-around items-center pt-3" >
        <div class={`${estilos.tarjeta} card w-80`}>
            <figure class="px-4 pt-10">
                <lord-icon
                        src="https://cdn.lordicon.com/suhrifrv.json"
                        trigger="hover"
                        colors="outline:#121331,primary:#3a3347,secondary:#7C9969,tertiary:#ebe6ef"
                        style={{width:150 + "px", height:150 + "px"}}>
                </lord-icon>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class={`card-title ${estilos.titulo_card}`}>ROS2</h2>
                <p class={estilos.texto_card1}>Software que permite la comunicación entr el robot.</p>
            </div>
        </div>

        <div class={`${estilos.tarjeta} card w-80`}>
            <figure class="px-4 pt-10">
                <lord-icon
                        src="https://cdn.lordicon.com/myroguwc.json"
                        trigger="hover"
                        colors="outline:#121331,primary:#7C9969,secondary:#ebe6ef"
                        style={{width:150 + "px", height:150 + "px"}}>
                </lord-icon>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class={`card-title ${estilos.titulo_card}`}>Ros Web</h2>
                <p class={estilos.texto_card1}>Herramienta que permite acceder a los datos y servicios de ROS2.</p>
            </div>
        </div>

        <div class={`${estilos.tarjeta} card w-80`}>
            <figure class="px-4 pt-10">
                <lord-icon
                        src="https://cdn.lordicon.com/nholumov.json"
                        trigger="hover"
                        colors="outline:#121331,primary:#3a3347,secondary:#7C9969"
                        style={{width:150 + "px", height:150 + "px"}}>
                </lord-icon>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class={`card-title ${estilos.titulo_card}`}>HTML, CSS, JS y SQL</h2>
                <p class={estilos.texto_card1}>Lenguajes de programación web que se utilizan para crearla.</p>
            </div>
        </div>

        <div class={`${estilos.tarjeta} card w-80`}>
            <figure class="px-4 pt-10">
                <lord-icon
                        src="https://cdn.lordicon.com/qfbuijil.json"
                        trigger="hover"
                        colors="outline:#121331,primary:#7C9969,secondary:#7C9969,tertiary:#ebe6ef"
                        style={{width:150 + "px", height:150 + "px"}}>
                </lord-icon>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class={`card-title ${estilos.titulo_card}`}>OpenCV</h2>
                <p class={estilos.texto_card1}>Software para el procesamiento de imágenes y visión por computador.</p>
            </div>
        </div>
    </div>




</div>
    </Layout>)
}