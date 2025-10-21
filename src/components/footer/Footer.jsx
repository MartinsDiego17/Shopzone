import { SectionList } from "../sections-list/SectionsList";
import { Title } from "../Title/Title";
import "./footer.css";

export const Footer = ({ cant_products }) => {

    return (
        <footer id="contacto" className="footer-container">
            <Title />
            <SectionList cant_products={cant_products} />
            <p className="email">shopzone@hotmail.com</p>
            <hr />
            <p>@ 2025. Todos los derechos reservados. <br /> Desarrollado y diseñado por Diego Martins.</p>
        </footer>
    )
}