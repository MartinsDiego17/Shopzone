import "./presentation.css";
import headphones from "../../../public/hero/headphones.svg";

export const Presentation = () => {

    return (
        <section>
            <article className="cta-data">
                <h2><span>TODO LO QUE NECESITAS</span><span>AL ALCANCE DE UN CLICK</span></h2>
                <p>Explora nuestras diversas categorías y descubre las últimas novedades, descuentos y las mejores ofertas en tecnología, gadgets y accesorios para tu hogar y oficina.</p>
                <a href="#productos">
                    <button>
                        <span>
                            COMPRAR AHORA
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </button>
                </a>
            </article>
            <article className="svg-hero">
                <img src={headphones} />
            </article>
        </section>
    )
}