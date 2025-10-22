import { SectionList } from "../sections-list/SectionsList";
import { Title } from "../Title/Title";
import "./footer.css";
import { Link } from "react-router";

export const Footer = ({ cant_products }) => {

    return (
        <footer id="contacto" className="footer-container">
            <Title />
            <SectionList cant_products={cant_products} />
            <p className="email">shopzone@hotmail.com</p>
            <hr />
            <p>
                @ 2025. Todos los derechos reservados. <br /> Desarrollado y diseñado por
                <Link to={"https://www.linkedin.com/in/diego-martins-563954278/"} target="_blank"> Diego Martins</Link>
            </p>
        </footer>
    )
}