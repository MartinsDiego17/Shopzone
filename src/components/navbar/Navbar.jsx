import "./navbar.css";
import { SectionList } from "../sections-list/SectionsList";
import { Title } from "../Title/Title";

export const Navbar = ({ cant_products }) => {

    return (
        <header>
            <Title />
            <SectionList cant_products={cant_products} />
        </header>
    )
}